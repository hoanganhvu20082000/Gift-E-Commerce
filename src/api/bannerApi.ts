import axios from "axios";
const banner = require("./banner.postgres.json");

const bannerApi = {
  async getDataBanner() {
    // const response: any = await axios.get("https://example-app-be-cbae8c718e3e.herokuapp.com/banner");
    const res = [banner];
    return res;
  },
};

export default bannerApi;
