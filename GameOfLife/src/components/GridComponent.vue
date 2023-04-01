<template>
  <q-card class="bg-white q-pa-md q-ma-md" style="width: 100%; height: 100%">
    {{ grid[0][5] }}
    {{ gameStore.grid }}

    <cellComponent :isAlive="true"></cellComponent>
    <cellComponent :isAlive="false"></cellComponent>

    <div class="row" v-for="rowItem in grid" :key="rowItem">
      <div v-for="cell in rowItem" :key="cell">
        <cellComponent :isAlive="cell ? true : false"></cellComponent>
      </div>
      {{ rowItem }}
    </div>
  </q-card>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, defineComponent, computed } from "vue";
import { useCounterStore } from "../stores/GameConfig";
import cellComponent from "../components/CellComponent.vue";

export default {
  components: {
    cellComponent,
  },
  setup() {
    const gameStore = useCounterStore();
    const router = useRouter();

    const grid = gameStore.grid;

    const mutateGrid = () => {
      grid[7][1] = 5;
    };

    return {
      grid,
      mutateGrid,
      gameStore,
    };
  },
  name: "GridComponent",
};
</script>
