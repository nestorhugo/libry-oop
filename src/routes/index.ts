import express from "express";
import bookRoutes from "./bookRoutes";

const app = express();
app.use(bookRoutes);

export default app;
