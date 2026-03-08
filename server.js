import express from "express"
import { checkDBConnection } from "./utils/checkDBConnection.js";
import { CourseRouter } from "./routes/courses.js";
import  logger  from "./middleware/logger.js";
import { EnrollmentRouter } from "./routes/enrollment.js";
const app = express();
const PORT = process.env.PORT || 6325
app.use(express.json());
app.use(logger);
app.get("/test",(req,res)=>{
    res.send("Server running successfully")
})

app.use("/courses",CourseRouter);
app.use("/enroll",EnrollmentRouter);
app.listen(PORT, async() => {
    await checkDBConnection();
    console.log(`Server running on http://localhost:${PORT}`)
})
