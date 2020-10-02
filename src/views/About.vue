<template>
  <div class="m-5">
    <b-row align-h="center">
      <b-col sm="12" xl="6">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/woUZdM7qNjk?rel=0"
          allowfullscreen
        ></b-embed>
        <div my-4>
          <h4>Rating</h4>
          <b-form-rating v-model="value"></b-form-rating>
          <p class="mt-2">Value: {{ value }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>