import axios from "axios";
const about = require("./about.postgres.json");

const aboutApi = {
  async getDataAbout() {
    const response: any = about;
    return response;
  },
};

export default aboutApi;
