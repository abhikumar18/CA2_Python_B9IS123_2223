// imports schema from models
import StudentData from '../models/student.js';


//Gets/fetch data from MomgoDb and populates on the All Students Table
export const getStudents =  async (req, res)=> {
    try {
        const allStudents = await StudentData.find();
//respond with ok if created and error with 404 if not
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// Creates and Saves Students information into the MongoDB
export const createStudent = async(req,res)=>{
    const student = req.body;

    const newStudent = new StudentData(student);
//respond with create if created and error with 404 if not
    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}//Deletes Students information
export const deleteStudent = async (req, res)=> {
    const id = req.params.id;
//Respond with Successfully deleted and error if not deleted
    try {
       await StudentData.findByIdAndRemove(id).exec();
       res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
        
    }
}


