import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name : {
        type : {
            String,
        required : true
    }

    },
    qualification : {
        type : String,
        required :true
    },
    experienceInYears : {
        type : Number,
        required: true,
        default : 0
    },
    salary : {
        type : String,
        required : true
    },
    worksInHospital : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "hospital"
    }]
})

export const doctor = mongoose.model("doctor",doctorSchema)