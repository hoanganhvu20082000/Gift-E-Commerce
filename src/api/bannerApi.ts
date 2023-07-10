import axios from "axios";
const banner = require("./banner.postgres.json");

const bannerApi = {
  async getDataBanner() {
    // const response: any = await axios.get("http://localhost:3002/banner");
    const res = [banner];
    return res;
  },
};

export default bannerApi;
