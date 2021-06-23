import http from "../http-common";
import authHeader from "./auth-header";

class ProductGalleryService {
  // getAll() {
  //   return http.get("/productGalleries/", { headers: authHeader() });
  // }

  get(id) {
    return http.get(`/productGalleries/${id}`, { headers: authHeader() });
  }

  // add(data) {
  //   return http.post(
  //     "/productGalleries/",
  //     data,
  //     { headers: authHeader() },
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );
  // }

  // update(id, data) {
  //   return http.put(`/productGalleries/${id}`, data, {
  //     headers: authHeader(),
  //   });
  // }

  // delete(id) {
  //   return http.delete(`/productGalleries/${id}`, { headers: authHeader() });
  // }
}

export default new ProductGalleryService();
