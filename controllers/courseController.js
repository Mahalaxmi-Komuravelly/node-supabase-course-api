import supabase from "../supabaseClient.js";
export const getCourses = async (req, res) => {
    try {
        const { data, error } = await supabase.from("courses").select();
        if(error){
            res.status(500).json({ message: "Error while fetching courses"})
        }
        res.status(200).json({message:"All Course list",data})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}
