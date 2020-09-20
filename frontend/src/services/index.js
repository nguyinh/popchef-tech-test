import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "TBD";

export async function fetchProducts() {
  try {
    const result = await axios.get("/products");

    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export async function addProduct(label, price, rating, category) {
  try {
    const result = await axios.post("/products", null, {
      params: {
        label,
        price,
        rating,
        category,
      },
    });

    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateProduct(id, label, price, rating, category) {
  try {
    const result = await axios.put("/products", null, {
      params: {
        id,
        label,
        price,
        rating,
        category,
      },
    });

    return result.data;
  } catch (err) {
    console.log(err);
  }
}