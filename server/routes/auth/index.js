import express from "express";
import {check, validationResult} from "express-validator";
import {errorResponse, successResponse} from "../../helpers/ResponseHelper.js";
import Account from "../../models/Account/model.js";
import jwt from "jsonwebtoken";
const authRoutes = express.Router()
import crypto from "crypto";

authRoutes.post('/register', async (req, res) => {
    try {
        
        await check('email', 'email is required').exists().run(req)
        await check('password', 'password is required').exists().run(req)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return errorResponse(res, 'Validation Error', errors.array(), 400 )
        }
        
        const { email, password } = req.body
        
        const createAccount = new Account({ email, password })
        await createAccount.save()

        const payload = { id: createAccount._id };
        const token = jwt.sign(payload, process.env.API_KEY, { expiresIn: '1h' });
        const data = {
            userData: createAccount,
            accessToken: token
        }
        return successResponse(res, 'success', data, 201)
        
    }
    catch(e) {
        console.log(e)
        return errorResponse(res, 'Internal Server Error', e, 500)
    }
})

authRoutes.post('/login', async (req, res) => {
    try {
        await check('email', 'email is required').exists().run(req)
        await check('password', 'password is required').exists().run(req)

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return errorResponse(res, 'Validation Error', errors.array(), 400 )
        }

        const { email, password } = req.body

        const account = await Account.findOne({ email });
        if (!account) {
            return errorResponse(res, 'Incorrect Email/Password', [], 400)
        }

        const hash = crypto.createHash('sha256').update(password).digest('hex');
        if (hash !== account.password) {
            return errorResponse(res, 'Incorrect Email/Password', [], 400)
        }

        const payload = { id: account._id };
        const token = jwt.sign(payload, process.env.API_KEY, { expiresIn: '1h' });
        
        const data = {
            userData: account,
            accessToken: token
        }

        return successResponse(res, 'Login Successful', data, 200)
    }
    catch (e) {
        console.log(e)
        return errorResponse(res, 'Internal Server Error', e, 500)
    }
    
})

export default authRoutes