import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "TBD";

export async function fetchProducts() {
  try {
    const result = await axios.get("/products");
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
