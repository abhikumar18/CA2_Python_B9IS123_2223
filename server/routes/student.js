import express from 'express'
import { getStudents, createStudent, deleteStudent } from '../controllers/students.js';
import student from '../models/student.js';

const router = express.Router();

// API routes for fetching data, posting/creating and deleting data.
router.get('/', getStudents);
router.post('/', createStudent); 
router.delete('/:id', deleteStudent);

//Exports router to be imported by controllers
export default router;