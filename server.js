import express from "express"
import { checkDBConnection } from "./utils/checkDBConnection.js";
import { CourseRouter } from "./routes/courses.js";

const app = express();
const PORT = process.env.PORT || 6325
app.use(express.json());

app.get("/test",(req,res)=>{
    res.send("Server running successfully")
})

app.use("/courses",CourseRouter);
app.listen(PORT, async() => {
    await checkDBConnection();
    console.log(`Server running on http://localhost:${PORT}`)
})
