var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationChannelSchema = new Schema({
    
    

    name: {
        type: String,
        required: true
    },
    
    type: {
        type: String,
        required: true
    },

    channel: {
        type: String,
        required: true
    },

    isVerified:{
        type:Boolean,
        default:false
    },

    user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },
     
});


module.exports = mongoose.model('Notification-Channel', NotificationChannelSchema);