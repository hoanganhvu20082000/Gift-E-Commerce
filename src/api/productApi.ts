import axios from "axios";
// const product = require("./product.postgres.json");

const productApi = {
  async getAllProduct() {
    const res = await axios.get("http://localhost:3002/products/all");

    // const response = { data: product };
    return res;
  },
  async getProductById(id: any): Promise<any> {
    const response = await axios.get(`http://localhost:3002/products/${id}`);
    return response;
  },
  async searchProductByName(classify: any): Promise<any> {
    const response = await axios.get(
      `http://localhost:3002/products/search?classify=${classify}`
    );
    return response;
  },
  async updateProductById(id: any, product: any): Promise<any> {
    console.log("product", product);
    const response = await axios.patch(
      `http://localhost:3002/products/${id}`,
      product
    );
    console.log("response", response);
    return response;
  },
};

export default productApi;
