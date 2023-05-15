<template>
  <q-card :class="[isAlive ? 'bg-red' : 'bg-white', 'cell']">{{}}</q-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CellComponent",
  props: {
    isAlive: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    let cellSize = ref({
      height: 50,
      width: 50,
    });
    return {
      cellSize,
    };
  },
};
</script>
<style scoped>
.cell {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  border-radius: 0px;
}
</style>
