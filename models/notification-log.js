const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NotificationLogSchema = new Schema({
    
    logTime: {
        type: Date, 
        default: Date.now,
        expires: '365d' 
    },

    channel: {
        type: String
    },

    channelType: {
        type: String
    },

    channelId:{
        type: Schema.Types.ObjectId,
        ref:'Notification-Channel'
    },
    
    error: {
        type: Boolean
    },  

    subject:{
        type: String
    },

    userId:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },

    probeURL:{
        type: String
    },

    probeId:{
        type: Schema.Types.ObjectId,
        ref:'Probe'
    }
});


module.exports = mongoose.model('Notification-Log', NotificationLogSchema);