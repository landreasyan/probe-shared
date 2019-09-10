var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NotificationPolicy = require('./notification-policy');

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

NotificationChannelSchema.pre('remove',function(){
  
    NotificationPolicy.updateMany({ channel_ids:{ $in:this.id } },{ $pull:{channel_ids:this.id } })
    .then(r => {
        //console.log(r);
    }).catch(e => {
        //console.log(e);
    })
})

module.exports = mongoose.model('Notification-Channel', NotificationChannelSchema);