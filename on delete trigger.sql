create table product(
	id serial primary key,
	name varchar(10),
	quantity int,
	brand varchar(10),
	color varchar(10),
	rating real 
	);

insert into product values (2,'shirt',11,'gucci','red',4.5),
	(3,'watch',10,'rado','yellow',4.9),
	(4,'pants',10,'prada','black',4.6);


create table backuptable(
	id int primary key, 
	name varchar(10),
	quantity int,
	brand varchar(10),
	color varchar(10),
	rating real ,
	deleted_at timestamp default current_timestamp
	)
	
update product set color='blue' where id=3;

create or replace function backupOnDelete()
	returns trigger
	as $$ 
	begin
	insert into backuptable values(OLD.id,OLD.name,OLD.quantity,OLD.brand,OLD.color,OLD.rating,current_timestamp);
	return OLD;
	end;
	$$
language plpgsql;

create trigger afterdelete
	after delete on product
	for each row
	execute function backupOnDelete();

delete from product where id=3;

select * from product;

select * from backuptable;