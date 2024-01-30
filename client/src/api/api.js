import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:8000/dishes" });

export const getAppetizers = () => {
  return server.get("/appetizers").then((result) => result.data);
};

export const getMains = () => {
  return server.get("/mains").then((result) => result.data);
};

export const getDesserts = () => {
  return server.get("/desserts").then((result) => result.data);
};
