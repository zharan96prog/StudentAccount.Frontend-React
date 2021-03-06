import axios from "axios";

axios.defaults.baseURL = "http://localhost:39460/api";
axios.interceptors.request.use(
   (config) => {
      const token = window.localStorage.getItem("studAcc-Token");
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

const responseBody = (response) => response.data;

const requests = {
   get: (url) => axios.get(url).then().then(responseBody),
   post: (url, body) => axios.post(url, body).then().then(responseBody),
   put: (url, body) => axios.put(url, body).then().then(responseBody),
};

const User = {
   register: (user) => requests.post(`/auth/register`, user),
   login: (user) => requests.post(`/auth/login`, user),
   listUsers: (numberPage) => requests.get(`/auth/allUsers/${numberPage}`),
   updateUser: (user) => requests.put(`/auth/updateUser`, user),
   getUserById: (Id) => requests.get(`/auth/getUserById/${Id}`),
};
export default class ApiStoreService {
   async register(user) {
      const data = await User.register(user)
         .then((responce) => {
            return {
               data: responce,
            };
         })
         .catch((error) => {
            return error.response;
         });
      return data;
   }
   async login(user) {
      const data = await User.login(user)
         .then((responce) => {
            return {
               data: responce,
            };
         })
         .catch((error) => {
            return error.response;
         });
      return data;
   }
   async getAllUsers(numberPage) {
      const ListUsers = await User.listUsers(numberPage)
         .then((responce) => {
            return responce;
         })
         .catch((error) => {
            return error.responce;
         });
      return ListUsers;
   }
   async updateUser(user) {
      const users = await User.updateUser(user)
         .then((responce) => {
            return responce;
         })
         .catch((error) => {
            return error.response;
         });
      return users;
   }
   async getUserById(Id) {
      const user = await User.getUserById(Id)
         .then((responce) => {
            return responce;
         })
         .catch((error) => {
            return error.response;
         });
      return user;
   }
}
