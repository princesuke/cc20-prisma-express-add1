import express from "express";
import productRoutes from "./routes/product.routes.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://locahost:${PORT}`);
});
