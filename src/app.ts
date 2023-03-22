import express from "express";

import morgan from "morgan";

import cors from 'cors'

const app =express();

import partnersRoutes from "./routes/partners.route";

//setting
app.set('port',3014);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//routes
app.use('/partners',partnersRoutes);

export default app;