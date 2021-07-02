import http from "./http-common";
import authHeader from "./auth-header";

export class TransactionService {
    getAll(userId) {
        return http.get(`/transaction/u/${userId}`, { headers: authHeader() });
    }

    get(id) {
        return http.get(`/transaction/${id}`, { headers: authHeader() });
    }

    add(data) {
        return http.post("/transaction/", data, { headers: authHeader() });
    }

    update(userId, data) {
        return http.put(`/transaction/u/${userId}`, data, {
            headers: authHeader(),
        });
    }

    delete(id) {
        return http.delete(`/transaction/${id}`, { headers: authHeader() });
    }

}

export default new TransactionService()
