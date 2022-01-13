<template>
  <div class="container mt-5 mb-5">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-7">
        <div class="card">
          <Form @added-comment="init"/>
          <Comments
            :comments="comments"
            :comments-number="commentsNumber"
            @load-more="loadMoreComments"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './assets/scss/styles.scss';
import api from './api';
import Form from './components/Form.vue';
import Comments from './components/Comments.vue';

export default {
  name: 'App',

  /**
   * Components.
   */
  components: {
    Form,
    Comments,
  },

  /**
   * Reactive data.
   *
   * @return {{commentsNumber: number, comments: *[], nextPage: null, currentPage: number}}
   */
  data () {
    return {
      currentPage: 0,
      nextPage: null,
      comments: [],
      commentsNumber: 0,
    };
  },

  /**
   * Created hook.
   */
  created () {
    this.init();
  },

  /**
   * Methods.
   */
  methods: {
    /**
     * Load comments from latest page
     */
    init () {
      api.getNumberLastPageCommets()
        .then(lastPage => {
          api.loadComments(lastPage)
            .then(response => response.data)
            .then(response => {
              this.comments = response.data.reverse();
              this.currentPage = response.current_page;
              this.commentsNumber = response.total;
            });
        });
    },

    /**
     * Load comments from next page
     */
    loadMoreComments () {
      const nextPage = this.currentPage - 1;

      api.loadComments(nextPage)
        .then(response => response.data)
        .then(response => {
          this.comments = this.comments.concat(response.data.reverse());
          this.currentPage = response.current_page;
          this.commentsNumber = response.total;
        });
    },
  }
};
</script>
