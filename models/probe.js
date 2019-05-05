const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProbeSchema = new Schema ({
    
    probePrefix:{
        type:String,
        required:true,
    },
    
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

		matchAll: {
			type: Boolean
        },
        
		keywords: {
			type: [
				String
			]
		}
	},
    
    requestBody: {
		type: String
    },

    requestBodyJson: {
		type: Boolean
	},
    
	basicAuth: {
        user:{
            type:String
        },
        password:{
            type:String
        }
    },
    
    headers: {
        type: [{
            key:{ 
                type :String
            },
            value:{ 
                type :String
            },
            _id:false
        }]
    },

    notification_policy_id : {
        type: Schema.Types.ObjectId,
        ref:'Notification-Policy'
     },

     user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
     },

     active:{
         type:Boolean,
         default:true
     },

     locations:[{
        type: String
    }]

});

const Probe = mongoose.model('Probe',ProbeSchema);

module.exports = Probe;