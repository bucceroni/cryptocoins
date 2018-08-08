import axios from "axios";

const api = "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10";

export default class Api {
  static async getCryptocoins() {
    const res = await axios.get(api);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}

