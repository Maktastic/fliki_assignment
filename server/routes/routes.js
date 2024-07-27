
import express from "express";
import authRoutes from "./auth/index.js";
import accountRoutes from "./account/index.js";
import productRoutes from "./products/index.js";

const routes = express.Router()

// Auth Routes
routes.use('/auth', authRoutes)

// Account Routes
routes.use('/account', accountRoutes)

// product routes
routes.use('/product', productRoutes)

export default routes