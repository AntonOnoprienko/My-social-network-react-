import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "cc1edbf0-ea6d-4193-9f6f-51094f2c5b73" },
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser: (id) => {
    return instance.post(`follow/${id}`);
  },
  unfollowUser: (id) => {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
  },
  getStatus: (userId) => {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance.put(`/profile/status/`, { status: status });
  },
};

export const authAPI = {
  getAuth: () => {
    return instance.get(`auth/me`);
  },
};
