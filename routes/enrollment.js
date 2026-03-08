import express from "express";
import { addStudent, getEnrollementsByCourse } from "../controllers/enrollementController.js";
import validateEnrollment from "../middleware/validateEnrollment.js";
export const EnrollmentRouter = express.Router();

EnrollmentRouter.post("/",validateEnrollment,addStudent);
EnrollmentRouter.get("/courses/:id/enrollements",getEnrollementsByCourse);
