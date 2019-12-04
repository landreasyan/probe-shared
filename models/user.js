var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const ObjectId = require('mongoose').Types.ObjectId; 

const NotificationChannel = require('./notification-channel');
const NotificationPolicy = require('./notification-policy');
const NotificationHistory = require('./notification-log');


var UserSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        unique: true,
        required: true
    },
  
    password: {
        type: String,
        required: true
    },

    isVerified:{
        type:Boolean,
        default:false
    },

    stripe:{
        
        paymentMethods:{
            type:Object
        },

        customerId:{
            type:String
        }
    },
    
    subscription:{
        
        expirationDate:{
            type: Date,
            default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000)
        },

       lastRenewal:{
            type: Date
        },

        usage:{

            probesCount:{
                type:Number,
                default:0
            },

            maxAllowedProbesCount:{
                type:Number,
                default:1
            },

            smsCredits:{
                type:Number,
                default:10
            }
        }
        
    }
});

UserSchema.pre('remove',function(next){
 
    let cond = {user_id:this._id};

    Promise.all([   
            NotificationChannel.deleteMany(cond),
            NotificationPolicy.deleteMany(cond),
            NotificationHistory.deleteMany(cond)
        ]).then(
        next(null, { success:true })
    ).catch(next)
})

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next(null, user);
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);