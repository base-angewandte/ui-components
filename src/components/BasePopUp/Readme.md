## Demo

A basic example

```vue live
<template>
  <div
  class="container">
    <BaseButton
      text="Click me"
      @clicked="showPopUp = true" />
    <BasePopUp
      v-if="showPopUp"
      title="An Example Pop Up"
      button-right-text="Custom Submit"
      @close="showPopUp = false"
      @button-left="showPopUp = false"
      @button-right="action">
      <div class="body">Specify Content here</div>
    </BasePopUp>
</div>
</template>

<script>
export default {
  data() {
    return {
      showPopUp: false,
    };
  },
  methods: {
    action() {
      alert('Pop Up Action confirmed!');
    },
  },
};
</script>

<style>
  .container {
    position: relative;
  }

  .body {
    height: 100px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

```
