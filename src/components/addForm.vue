<template>
  <div>
    <form @submit.prevent="onSubmit" class="shadow col-lg-4 mx-auto mt-4">
      <div class="form-group d-flex flex-column-reverse">
        <input
          v-model="form.title"
          id="title"
          type="text"
          class="form-control"
          required
        />
        <label for="title" class="text-left w-100 text-muted">Title</label>
      </div>
      <div
        v-for="i of noOfItems"
        :key="i"
        @keydown.tab="onTab(i, $event)"
        class="form-group mt-4 d-flex flex-column-reverse"
      >
        <input
          v-model="form.content[i - 1]"
          :id="`item-${i}`"
          type="text"
          class="form-control "
        />
        <label :for="`item-${i}`" class="text-left w-100 text-muted"
          >Add Item (press tab to add)</label
        >
      </div>
      <div>
        <button type="submit" class="btn btn-success mt-3">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import random from "@/utils/random";

export default {
  data() {
    return {
      noOfItems: 1,
      form: {
        title: "",
        content: [],
      },
    };
  },
  methods: {
    onTab(index, e) {
      const value = e.target.value;
      if (value && index === this.noOfItems) ++this.noOfItems;
    },
    onSubmit() {
      this.$emit("new-note", { ...this.form, id: random(100) });
      alert("Submited!");
      this.$router.push({ name: "Index" });
    },
  },
};
</script>

<style scoped>
form {
  background-color: white;
  border-radius: 15px;
  padding: 15px;
}

label {
  font-size: 0.8em;
  transition: 0.5s;
  /* line-height: 1; */
}
input:focus + label {
  color: black !important;
  font-size: 1em;
}
</style>
