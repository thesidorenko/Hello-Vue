<template>
  <div class="mt-2">
    <div class="p-3"><h6>{{ commentsNumber }} comments</h6></div>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <div class="p-3">
      <button
        v-if="!isFirstPage"
        class="btn btn-success"
        @click="loadMore"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue';

export default {
  name: 'Comments',

  components: {
    Comment,
  },

  props: {
    comments: {
      type: Array,
      default: () => {[];},
    },

    commentsNumber: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    isFirstPage () {
      return this.comments.length === this.commentsNumber;
    }
  },

  methods: {
    loadMore: function () {
      this.$emit('loadMore', true);
    },
  },
};
</script>
