import express from "express";
import { addStudent } from "../controllers/enrollementController.js";
import validateEnrollment from "../middleware/validateEnrollment.js";
export const EnrollmentRouter = express.Router();

EnrollmentRouter.post("/",validateEnrollment,addStudent);