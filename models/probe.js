const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProbeSchema = new Schema ({
    
    probeURL:{
        type:String,
        required:true,
    },

    interval:{
        type:Number,
        required:true,
        default:60
    },

    method:{
        type:String,
        default:'GET',
    },

    port:{
        type:Number,
        required:true,
        default:80
    },
    
    timeout: {
		type: Number
    },
    
	matchPolicy: {
		exactMatch: {
			type: Boolean
		},
		keywords: {
			type: [
				String
			]
		}
	},
    
    body: {
		type: String
    },
    
	auth: {},
    
    json: {
		type: Boolean
	},
    
    headers: {
        
    },

    notification_policy_id : {
        type: Schema.Types.ObjectId,
        ref:'Notification-Policy'
     },

     user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },

});

const Probe = mongoose.model('Probe',ProbeSchema);

module.exports = Probe;