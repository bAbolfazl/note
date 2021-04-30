<template>
  <header class="position-relative">
    <h1>
      <router-link :to="{ name: 'Index' }">
        Note App
      </router-link>
    </h1>
    <div class="add-btn">
      <router-link :to="showAddBtn ? { name: 'Add' } : { name: 'Index' }">
        <AddBtn>
          <i v-if="showAddBtn" class="fas fa-plus"></i>
          <i v-else class="fas fa-home"></i>
        </AddBtn>
      </router-link>
    </div>
    <!-- <div v-else class="add-btn">
      <HomeBtn />
    </div> -->
  </header>
</template>

<script>
import AddBtn from "./addBtn";

export default {
  data() {
    return {
      //   route: this.$Router.path,
      showAddBtn: this.$route.name !== "Add",
    };
  },
  components: {
    AddBtn,
  },
  watch: {
    $route(to) {
      this.showAddBtn = !(to.name === "Add");
    },
  },
  //   mounted() {
  //     // alert("hi");
  //     this.showAddBtn = !(this.$route.name === "Add");
  //     console.log(this.$route.name);

  //     //   console.log(this.showAddBtn);
  //   },
  methods: {
    // onHeadClick() {
    //   this.$router.push({ name: "Index" });
    // },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: #323fa0;
  font-weight: bold;
  font-size: 1.5em;
}
h1 {
  padding: 25px;
  text-align: left;
  color: gray;
  cursor: pointer;
}
.add-btn {
  position: absolute;
  right: 20px;
  bottom: -20px;
}
a {
  text-decoration: none !important;
}
</style>
