<template>
  <div>
    <edit-form :data="data" @update:note="$emit('update:note', $event)" />
  </div>
</template>
<script>
import editForm from "../components/editForm";
export default {
  name: "edit",
  components: { editForm },
  props: {
    data: Array,
  },
};
</script>
