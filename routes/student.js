import express from "express";
import {
  allStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.js";

const router = express.Router();

router.get("/all", allStudent);
router.post("/create", createStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;