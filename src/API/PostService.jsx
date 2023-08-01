import axios from "axios";

export default class PostService {
  static async getData(limit = 10, page = 1) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getPostById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  static async getPostByComment(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}
