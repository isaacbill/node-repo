const EventEmitter=require('events');

const Logger=require('./logger')
const logger=new Logger();
//register an event
logger.on('messageLogged',(arg)=>{
   console.log('Listener called',arg);
});
logger.log('message');