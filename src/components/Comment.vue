<template>
  <div class="comment d-flex flex-row p-3"><img
    src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle me-3"
  >
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center">
        <span class="comment__name">{{ comment.name }}</span>
        <small class="comment__date">{{ getDate }}</small>
      </div>
      <p class="comment__text text-justify mb-0">{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Component name.
   */
  name: 'Comment',

  /**
   * Props.
   */
  props: {
    comment: {
      type: Object,
      default () {
        return {
          name: '',
          text: '',
          created_at: new Date(),
        };
      },
    },
  },

  /**
   * Computed.
   */
  computed: {
    getDate () {
      return new Date(this.comment.created_at).toUTCString();
    }
  }
};
</script>
