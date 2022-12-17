import mongoose from "mongoose";

// A variable that holds the schema (JSON)
const studentSchema = mongoose.Schema({
    regNo: {
        type: Number,
        required: true,
        unique: true
    },
    studentName:{
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true,
        default: 'A'
    }
    
});

// Variable that hold schema of MongoDb
const student = mongoose.model('student', studentSchema);

// Exports to be imported in the controllers students
export default student;