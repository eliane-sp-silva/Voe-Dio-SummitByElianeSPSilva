const amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (connError, connection) => {
    if(connError){
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelError;
        }
        const QUEUE = 'Testando envio';
        channel.assertQueue(QUEUE);
        channel.sendToQueue(QUEUE, Buffer.from('Olá! Hora de codar!'));
        console.log(`Message send ${QUEUE}`);
    })
})