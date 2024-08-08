import { createLogger,transports,format} from "winston";
const  logger=createLogger({
    transports:[
        new transports.File({
            dirname:'logs',
            filename:'console.log'
        })
    ],
    
    format:format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({timestamp,level,message})=>{
            return `[${timestamp}]: ${level}: ${message}`
        })
    )
})
export default logger;