import axios from 'axios';

export default {
  /**
   * Load comments.
   *
   * @param {number} page
   * @return {Promise<AxiosResponse<any>>}
   */
  loadComments (page) {
    return axios.get('https://jordan.ashton.fashion/api/goods/30/comments?page=' + page);
  },

  /**
   *
   * @return {Promise<number | null>}
   */
  getNumberLastPageCommets () {
    return axios.get('https://jordan.ashton.fashion/api/goods/30/comments')
      .then(response => response.data.last_page);
  }
};
