const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    
    logTime: {
        type: Date, 
        default: Date.now
    },   
    
    error: {
        type: Boolean
    },  

    errorMsg: {
        type: String
    },  

    probeUrl:{
        type: String
    },

    probeId:{
        type: Schema.Types.ObjectId,
        ref:'Probe'
    },

    locName: {
        type: String
    },

    try: {
        type:Number
    },
 
    incident:{
        type: String
    },

    notificationPolicyName: {
        type: String
    },

    notificationPolicyId:{
        type: Schema.Types.ObjectId,
        ref:'Notification-Policy'
     },

     notificationPolicyThresholdStatus:{
        type: String,
    },

    userId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: false
     },


});


module.exports = mongoose.model('Incident', IncidentSchema);