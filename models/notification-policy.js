var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationPolicySchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    threshold_loc: {
        type: Number,
        required: true
    },

    threshold_policy: {
        type: Number,
        required: true
    },

    continuous:{
        type:Boolean,
        default: false
    },

    recovery:{
        type:Boolean,
        default: true
    },

    user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },
     
     channel_ids:[{
        type: Schema.Types.ObjectId,
        ref:'Notification-Channel'
    }]
});


module.exports = mongoose.model('Notification-Policy', NotificationPolicySchema);