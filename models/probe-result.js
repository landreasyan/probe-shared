const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProbeResultSchema = new Schema ({
    
        probeTime: {
            type: Date, 
            default: Date.now,
            expires: '365d' 
        },

        error: {
        },
        
        statusCode: {
            type: Number
        },
        
        responseTime: {
            type: Number
        },
        
        contentCheck: {
            type: Number
        },

        timings: {
            socket: {
                type: Number
            },
            lookup: {
                type: Number
            },
            connect: {
                type: Number
            },
            response: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        headers: {
          
        },

        timingPhases: {
            wait: {
                type: Number
            },
            dns: {
                type: Number
            },
            tcp: {
                type: Number
            },
            firstByte: {
                type: Number
            },
            download: {
                type: Number
            },
            total: {
                type: Number
            }
        },
        
        body: {
            type: String
        },

        probeId:{
           type: Schema.Types.ObjectId,
           ref:'Probe'
        },

        locName: {
            type: String
        }
    });

const ProbeResult = mongoose.model('Probe-result',ProbeResultSchema);

module.exports = ProbeResult;