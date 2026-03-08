import supabase from "../supabaseClient.js";
export const checkDBConnection = async() => {
    try {
        const {error} = await supabase.from("courses").select("id").limit(1);
        if(error){
            console.log("Database connection failed");
            process.exit(1);
        }
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connecting to database",error.message)
    }
}