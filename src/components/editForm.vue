<template>
  <div>
    <div>{{ this.$route.params.id }}</div>
    <form @submit.prevent="onUpdate" class="shadow col-lg-4 mx-auto mt-4">
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
        <button type="submit" class="btn btn-success mt-3">Update</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      route: null,
      noOfItems: 1,
      form: {
        title: null,
        content: [],
      },
    };
  },
  //   update() {
  //     alert("update");
  //   },

  mounted() {
    const filterd = this.data.filter(
      (item) => item.id === this.$route.params.id
    );
    this.form = Object.assign({}, filterd[0]);
    this.noOfItems = filterd[0]?.content.length;
  },
  methods: {
    onTab(index, e) {
      const value = e.target.value;
      if (value && index === this.noOfItems) ++this.noOfItems;
    },
    onUpdate() {
      this.$emit("update:note", { ...this.form });
      alert("Updated!");
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
