import axios from "axios";

export const getAllOrder = async () => {
  const res = await axios.get(
    `https://example-app-be-cbae8c718e3e.herokuapp.com/orders/all`
  );
  return res;
};
export const getOrderByUser = async (id: string) => {
  const res = await axios.get(
    `https://example-app-be-cbae8c718e3e.herokuapp.com/orders/user/${id}`
  );
  return res;
};
export const addNewOrder = async (data: any) => {
  try {
    const res = await axios.post(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/orders`,
      {
        data,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const updateStatusOrder = async (data: any) => {
  try {
    const res = await axios.patch(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/orders",
      {
        data,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
