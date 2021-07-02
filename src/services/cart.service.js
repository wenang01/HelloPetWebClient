import http from "./http-common";
import authHeader from "./auth-header";

class CartsService {
    getAll(userId) {
        return http.get(`/carts/u/${userId}`, { headers: authHeader() });
    }

    get(id) {
        return http.get(`/carts/${id}`, { headers: authHeader() });
    }

    add(data) {
        return http.post("/carts/", data, { headers: authHeader() });
    }

    update(userId, id, data) {
        return http.put(`/carts/u/${userId}/c/${id}`, data, {
            headers: authHeader(),
        });
    }

    delete(id) {
        return http.delete(`/categories/${id}`, { headers: authHeader() });
    }
}

export default new CartsService();