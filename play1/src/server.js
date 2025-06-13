import express from "express";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://locahost:${PORT}`);
});
