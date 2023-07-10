import axios from "axios";

const wishList = {
  async createWishListItem(data: any): Promise<any> {
    const res = await axios.post(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/wish-list",
      data
    );
    return res;
  },
  async fetchWishList(userId: any): Promise<any> {
    const { data } = await axios.get(
      `https://example-app-be-cbae8c718e3e.herokuapp.com/wish-list/${userId}`
    );
    return data;
  },
  async deleteWishListItem(data: any): Promise<any> {
    await axios.delete(
      "https://example-app-be-cbae8c718e3e.herokuapp.com/wish-list",
      data
    );
  },
};
export default wishList;
