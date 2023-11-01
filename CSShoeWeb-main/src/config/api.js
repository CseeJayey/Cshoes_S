import { http } from './http'

const API = {
    login: async (data) => await http.post("/users/authenticate", data)
}

export default API