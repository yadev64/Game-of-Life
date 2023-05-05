<template>
  <q-page class="bg-green-4" style="height: 100vh; width: 100vw">
    <div class="row">
      <div class="col-md-9 col-sm-12 col-xs-12">
        <GridComponent></GridComponent>
        <q-btn label="mutate" @click="mutateGrid"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, defineComponent, computed } from "vue";
import { useGameStore } from "../stores/GameConfig";
import GridComponent from "../components/GridComponent.vue";

export default {
  components: {
    GridComponent,
  },

  setup() {
    const gameStore = useGameStore();
    const router = useRouter();

    let grid = gameStore.grid;
    let grid2 = gameStore.grid2;

    const liveNeighbourCount = (i, j) => {
      neighbourCount = 0;

      let is = i - 1 >= 0 ? i - 1 : i;
      let ie = i + 1 < grid.length ? i + 1 : i;
      let js = j - 1 >= 0 ? j - 1 : j;
      let je = j + 1 < grid.length ? j + 1 : j;

      for (let inew = is; inew <= ie; inew++) {
        for (let jnew = js; jnew <= je; jnew++) {
          if (grid[inew][jnew] != 0) {
            neighbourCount += 1;
          }
        }
      }

      return neighbourCount;
    };

    return {
      grid,
      mutateGrid,
      gameStore,
    };
  },
  // name: 'PageName',
};
</script>
