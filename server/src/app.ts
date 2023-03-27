import express from "express";
import morgan from "morgan";

const app = express();

import authRoutes from "./routes/auth.routes";

//settings
app.set("port", 3000);
//midleware
app.use(morgan("dev"));
//routes
app.use(authRoutes);

export default app;
