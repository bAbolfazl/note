<template>
  <div>
    <note-list :data="data" @delete-item="$emit('delete-item', $event)" />
  </div>
</template>

<script>
import NoteList from "../components/noteList";
export default {
  components: {
    NoteList,
  },
  props: {
    data: Array,
  },
  methods: {},
  created() {
    console.log(this.data);
  },
};
</script>
