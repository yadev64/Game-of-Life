<template>
  <q-card class="bg-white q-pa-md q-ma-md" style="width: 100%; height: 100%">
    {{ grid[0][5] }}
    {{ gameStore.grid }}

    <cellComponent :isAlive="true"></cellComponent>
    <cellComponent :isAlive="false"></cellComponent>

    <div class="row" v-for="(rowItem, i) in grid" :key="rowItem">
      <div v-for="(cell, j) in rowItem" :key="cell">
        <cellComponent
          :isAlive="cell ? true : false"
          @click="mutateCell(i, j)"
        ></cellComponent>
      </div>
      {{ rowItem }}
    </div>
  </q-card>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, defineComponent, computed } from "vue";
import { useGameStore } from "../stores/GameConfig";
import cellComponent from "../components/CellComponent.vue";

export default {
  components: {
    cellComponent,
  },
  setup() {
    const gameStore = useGameStore();
    const router = useRouter();

    let grid = gameStore.grid;

    const mutateCell = (i, j) => {
      if (grid[i][j] == 5) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = 5;
      }
    };

    return {
      grid,
      gameStore,
      mutateCell,
    };
  },
  name: "GridComponent",
};
</script>
