var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Probe = require('./probe');

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

NotificationPolicySchema.pre('remove',function(){
    Probe.updateMany({ notification_policy_id:{ $in:this.id } }, { $unset:{ notification_policy_id : '' }})
    .then(r => {
        //console.log(r);
    }).catch(e => {
        //console.log(e);
    })
})

module.exports = mongoose.model('Notification-Policy', NotificationPolicySchema);