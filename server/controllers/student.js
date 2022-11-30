export const getStudents = async (req,res) =>{
    try{
        const allStudents = await student.find();
        res.status(200).json({
            allStudents,
        })
    }catch(error){
        res.status(400).json({
            message:error.message,
        })
    }
}

export const createStudent = async(req,res)=>{
    const student = req.body;

    const newStudent = new Student(student);
    try{
        await newStudent.save();
        res.status(201).json({
            newStudent,
        });
    }catch(error){
        res.status(409).json({
            message:error.message,
        })
    }
}