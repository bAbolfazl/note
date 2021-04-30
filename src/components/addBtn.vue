<template>
  <button class="btn d-flex align-items-center justify-content-center">
    <slot />
  </button>
</template>

<script>
export default {
  name: "addBtn",
  methods: {
    // onClick() {
    //   this.$router.push({ name: "Add" });
    // },
  },
};
</script>

<style scoped>
button {
  width: 40px;
  height: 40px;
  background-color: #ea1e64;
  border-radius: 100%;
  color: white;
}
</style>
