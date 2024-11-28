import express from "express";

const allStudent = (req, res) => res.send("All student");
const createStudent = (req, res) => res.send("create student");
const updateStudent = (req, res) => res.send("update student");
const deleteStudent = (req, res) => res.send("delete student");

export { allStudent, createStudent, updateStudent, deleteStudent };
