const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NotificationLogSchema = new Schema({
    
    logTime: {
        type: Date, 
        default: Date.now
    },

    channel: {
        type: String
    },

    channelType: {
        type: String
    },

    channel_id:{
        type: Schema.Types.ObjectId,
        ref:'Notification-Channel'
    },

    subject:{
        type: String
    },

    user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },

    probeUrl:{
        type: String
    },

    probe_id:{
        type: Schema.Types.ObjectId,
        ref:'Probe'
    }
});


module.exports = mongoose.model('Notification-Log', NotificationLogSchema);