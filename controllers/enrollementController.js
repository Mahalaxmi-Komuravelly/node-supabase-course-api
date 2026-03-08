import supabase from "../supabaseClient.js";

export const addStudent = async(req,res) => {
try {
    const {student_name,course_id} = req.body || {};
    const payload = {
        student_name,
        course_id
    }
    const {data,error} = await supabase.from("enrollments").insert(payload).select.single();
    if(error){
            res.status(500).json({message:"Error while adding student"});
    }
        res.status(201).json({message:"Added student successfully",data});
} catch (error) {
    res.status(500).json({message:"Internal Server Error"});
}
}