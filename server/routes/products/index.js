
import express from "express";
import {successResponse} from "../../helpers/ResponseHelper.js";
const productRoutes = express.Router()
    
productRoutes.get('/', async (req, res) => {
    const productArray = []
    for(let i=0; i<= 5; i++) {
        let product = {
            id: Math.floor(100000 + Math.random() * 900000),
            name: 'Modern Max Pro',
            description: "This is a brief description of the product.",
            price: 300,
            currency: 'AED',
            image:'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
        productArray.push(product)
    }
    return successResponse(res, null, productArray, 200)
})



export default productRoutes