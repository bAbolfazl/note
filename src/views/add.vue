<template>
  <div>
    <add-form @new-note="$emit('new-note', $event)" />
  </div>
</template>

<script>
import AddForm from "../components/addForm";
export default {
  components: {
    AddForm,
  },
};
</script>
