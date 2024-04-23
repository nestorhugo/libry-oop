import express from "express";
import bookRoutes from "./bookRoutes";
import studentRoutes from "./studentRoutes";

const app = express();
app.use(bookRoutes);
app.use(studentRoutes);

export default app;
