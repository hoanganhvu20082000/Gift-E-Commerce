import axios from "axios";

const userApi = {
  async login(data: any): Promise<any> {
    const response = await axios.post("http://localhost:3002/auth/login", {
      user_name: data.payload.userName,
      password: data.payload.password,
    });
    return response;
  },

  async register(data: any): Promise<any> {
    const response = await axios.post("http://localhost:3002/auth/register", {
      user_name: data.payload.userName,
      email: data.payload.email,
      password: data.payload.password,
      cart: [],
    });
    return response;
  },

  async getDataCartUser(id: string): Promise<any> {
    const response = await axios.get(`http://localhost:3002/users/cart/${id}`);
    return response;
  },

  async getAllUsers(): Promise<any> {
    const response = await axios.get(`http://localhost:3002/users/all`);
    return response;
  },
};

export default userApi;
