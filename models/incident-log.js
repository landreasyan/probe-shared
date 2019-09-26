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

    probe_id:{
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

    notification_policy_name: {
        type: String
    },

    notification_policy_id:{
        type: Schema.Types.ObjectId,
        ref:'Notification-Policy'
     },

     notification_policy_threshold_status:{
        type: String,
    },

    user_id:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: false
     },


});


module.exports = mongoose.model('Incident', IncidentSchema);