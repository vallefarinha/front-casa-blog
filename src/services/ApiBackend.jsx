import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const ApiBackend = {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async logout(token) {
    try {
      const response = await axios.post(`${API_BASE_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /*------Consumo de rutas api publicas------*/
  async getAllCategories() {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getCategoryById(categoryId) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/category/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return null;
    }
  },

  async getAllPost() {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getPostById(postId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/post/${postId}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  async getAllComments() {
    try {
      const response = await axios.get(`${API_BASE_URL}/comments`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async createComment(commentData) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/create/comment`,
        commentData
      );
      return response.data;
    } catch (error) {
      return null;
    }
  },

  /*------Consumo de rutas api para el Admin-----*/ 
  async createCategory(categoryData) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_BASE_URL}/create/category`, categoryData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},
async updateCategory(categoryId, updatedCategoryData) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${API_BASE_URL}/category/update/${categoryId}`, updatedCategoryData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},

async deleteCategory(categoryId) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_BASE_URL}/category/destroy/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},
async createPost(PostData) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_BASE_URL}/create/post`, PostData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},
async updatePost(postId, updatedPostData) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_BASE_URL}/post/${postId}/update`, updatedPostData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},
async deletePost(postId) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_BASE_URL}/post/${postId}/delete`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},
async deleteComment(commentId) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_BASE_URL}/comment/${commentId}/destroy`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return null;
    }
},

};
export default ApiBackend;
