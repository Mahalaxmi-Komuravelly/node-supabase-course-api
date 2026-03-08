import express from "express";
import { getCourses } from "../controllers/courseController.js";

export const CourseRouter = express.Router();
CourseRouter.get("/",getCourses);