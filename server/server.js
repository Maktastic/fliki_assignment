import * as dotenv from "dotenv";
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/routes.js";
import {errorResponse} from "./helpers/ResponseHelper.js";
import passport from "./config/passport.js";

const app = express();
const port = 5000;

// Database connection
await connectDatabase();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Routing
app.use('/api', routes);

// 404 Not Found Routes
app.use((req, res, next) => {
    return errorResponse(res, 'Invalid Route', [], 404)
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    return errorResponse(res, 'Internal Server Error', err.stack, 500)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
