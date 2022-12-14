import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

/*-------------------------------------------------------------------
@desc Fetch all products
@route GET [/api/products]
@access universal
-------------------------------------------------------------------*/
router.route("/").get(getProducts);

/*-------------------------------------------------------------------
@desc Fetch product matching ID
@route GET [/api/products/:id]
@access universal
-------------------------------------------------------------------*/
router.route("/:id").get(getProductById);

export default router;
