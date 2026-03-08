const validateEnrollment = (req,res,next) => {
     const {student_name,course_id} = req.body || {};
     if(!student_name || course_id === undefined){
        res.status(400).json({message:"student name and course id are required"})
     }
     next();
}

export default validateEnrollment;