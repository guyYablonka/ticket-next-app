import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined" && process.env.NODE_ENV !== "development") {
    // We are on the server
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  }
  // We are on the browser
  return axios.create({
    baseURL: "http://localhost:4000",
  });
};
