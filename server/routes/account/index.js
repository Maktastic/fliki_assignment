import express from "express";
import passport from "passport";
import {errorResponse, successResponse} from "../../helpers/ResponseHelper.js";
const accountRoutes = express.Router()

const Authenticate = passport.authenticate('jwt', { session: false } )

accountRoutes.get('/', Authenticate, async (req, res) => {
    return res.json('account routes')
})


export default accountRoutes