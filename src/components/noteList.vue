<template>
  <div class="container note-list">
    <div
      v-for="item in data"
      :key="item.id"
      class="note-item shadow-sm position-relative"
    >
      <button @click="onDelete(item.id)" class="btn delete-btn">
        <i class="fas fa-trash"></i>
      </button>
      <div class="font-weight-bold">
        {{ item.title }}
      </div>
      <div class="mt-3">
        <span
          v-for="(item, index) in item.content"
          :key="index"
          class="sub-title small text-white"
        >
          {{ item }}
        </span>
      </div>
      <router-link :to="{ name: 'Edit', params: { id: item.id } }">
        <button class="btn btn-info edit-btn">
          <i class="fas fa-edit"></i>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-item", id);
    },
    // onEdit(id) {
    //   //   this.$emit("delete-item", id);
    //   this.$router.push({ name: "Edit", params: { id } });
    // },
  },
};
</script>

<style scoped>
.note-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.note-item {
  border-radius: 15px;
  background-color: white;
  margin: 30px;
  padding: 10px;
  width: 20%;
  min-width: 250px;
  padding-bottom: 40px;
}

.sub-title {
  background-color: gray;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
}
.edit-btn {
  border-radius: 100%;
  position: absolute;
  bottom: -20px;
  width: 40px;
  height: 40px;
  right: calc((100% - 40px) / 2);
}
.delete-btn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
