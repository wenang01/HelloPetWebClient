import http from "./http-common";
import authHeader from './auth-header';

class CategoryService {
    getAllCategories() {
        return http.get("/categories/", { headers: authHeader() });
    }

}

export default new CategoryService();
