import axios from "axios";

export const getAllOrder = async () => {
  const res = await axios.get(`http://localhost:3002/orders/all`);
  return res;
};
export const getOrderByUser = async (id: string) => {
  const res = await axios.get(`http://localhost:3002/orders/user/${id}`);
  return res;
};
export const addNewOrder = async (data: any) => {
  try {
    const res = await axios.post(`http://localhost:3002/orders`, {
      data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const updateStatusOrder = async (data: any) => {
  try {
    const res = await axios.patch("http://localhost:3002/orders", {
      data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
