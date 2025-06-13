import express from "express";
import {
  getProducts,
  create,
  search,
  softDelete,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", create);
router.get("/search", search);
router.delete("/:id", softDelete);

export default router;
