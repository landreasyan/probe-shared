var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Probe = require('./probe');

var NotificationPolicySchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    thresholdLoc: {
        type: Number,
        required: true
    },

    thresholdPolicy: {
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

    userId:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },
     
     channelIds:[{
        type: Schema.Types.ObjectId,
        ref:'Notification-Channel'
    }]
});

NotificationPolicySchema.pre('remove',function(){
    Probe.updateMany({ notificationPolicyId:{ $in:this.id } }, { $unset:{ notificationPolicyId : '' }})
    .then(r => {
        //console.log(r);
    }).catch(e => {
        //console.log(e);
    })
})

module.exports = mongoose.model('Notification-Policy', NotificationPolicySchema);