import axios from "axios";
// const product = require("./product.postgres.json");

const productApi = {
  async getAllProduct() {
    const res = await axios.get(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/products/all"
    );

    // const response = { data: product };
    return res;
  },
  async getProductById(id: any): Promise<any> {
    const response = await axios.get(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/products/${id}`
    );
    return response;
  },
  async searchProductByName(classify: any): Promise<any> {
    const response = await axios.get(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/products/search?classify=${classify}`
    );
    return response;
  },
  async updateProductById(id: any, product: any): Promise<any> {
    const response = await axios.patch(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/products/${id}`,
      product
    );
    return response;
  },

  async createProduct(product: any): Promise<any> {
    const { properties = "", type = "" } = product;
    try {
      const res = await axios.post(
        "https://example-app-be-cbae8c718e3e.herokuapp.com/products",
        {
          ...product,
          properties,
          type,
        }
      );
      alert("Tạo sản phẩm thành công");
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default productApi;
