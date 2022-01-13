<template>
  <div>
    <div class="p-3 pb-0">
      <h6>Add comment</h6>
    </div>
    <form
      class="p-3 form-color"
      @submit.prevent="onSubmit"
    >
      <div class="mb-3">
        <label for="formName" class="form-label">Name</label>
        <input
          v-model="formName"
          type="text"
          name="name"
          id="formName"
          class="form-control"
          placeholder="Enter your name"
          required
        >
      </div>
      <div class="mb-3">
        <label for="formText" class="form-label">Text</label>
        <textarea
          v-model="formText"
          name="text"
          id="formText"
          class="form-control"
          placeholder="Write a comment"
          style="height: 100px"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn btn-success"
      >Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
  data () {
    return {
      formName: '',
      formText: '',
    };
  },
  methods: {
    onSubmit () {
      if (this.formName.trim() && this.formText.trim()) {
        const newComment = {
          name: this.formName,
          text: this.formText,
        };

        axios.post('https://jordan.ashton.fashion/api/goods/30/comments', newComment)
          .then(response => {
            if (response.status === 200 && response.data === 1) {
              this.$emit('addedComment', newComment);
              alert('Comment added successfully!');
            }
          })
          .catch(error => console.log(error));

        this.cleanForm();
      }
    },

    /**
     * Clean form
     */
    cleanForm () {
      this.formName = '';
      this.formText = '';
    }
  },
};
</script>
