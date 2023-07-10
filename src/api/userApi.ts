import axios from "axios";

const userApi = {
  async login(data: any): Promise<any> {
    const response = await axios.post(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/auth/login",
      {
        user_name: data.payload.userName,
        password: data.payload.password,
      }
    );
    return response;
  },

  async register(data: any): Promise<any> {
    const response = await axios.post(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/auth/register",
      {
        user_name: data.payload.userName,
        email: data.payload.email,
        password: data.payload.password,
        cart: [],
      }
    );
    return response;
  },

  async getDataCartUser(id: string): Promise<any> {
    const response = await axios.get(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/users/cart/${id}`
    );
    return response;
  },

  async getAllUsers(): Promise<any> {
    const response = await axios.get(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/users/all`
    );
    return response;
  },
  async updateUser(id: any, data: any): Promise<any> {
    const res = await axios.patch(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/users/edit/${id}`,
      data
    );
    return res;
  },
};

export default userApi;
