const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);


//location schema

const geoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinate:{
        type:[Number],
        index:"2dsphere"
    }
});
const jobSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    rank:{
        type:String
    },
    intrest:{
        type:Boolean,
        default:false
    },
    geometry:geoSchema
});

const Job = mongoose.model('job',jobSchema);

module.exports = Job;