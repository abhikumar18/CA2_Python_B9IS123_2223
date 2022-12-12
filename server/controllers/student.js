import StudentData from '../models/student.js'

// Get Students Data
export const getStudents = async (req,res) =>{
    try{
        const allStudents = await StudentData.find();

        res.status(200).json(allStudents);
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}


// Creating students Data
export const createStudent = async(req,res)=>{
    const student = req.body;

    const newStudent = new StudentData(student);
    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

// Deleting Student Data
export const deleteStudent = async(req,res)=>{
    const id = req.params.id;
    try{
        await (await StudentData.findByIdAndRemove(id)).exec();
        res.send("Succesfully Deleted")
    }catch(error){
        console.log(error);
    }
}
