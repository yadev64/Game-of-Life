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

    const mutateGrid = () => {
      // console.log("Grid2init:", grid2);
      // grid2 = JSON.parse(JSON.stringify(grid));

      copyGrid(0);

      console.log("Grid2init:", JSON.parse(JSON.stringify(grid2)));

      // let liveCount = 1;

      // while (liveCount > 0) {
      setTimeout(() => {
        for (let i = 0; i < grid[0].length; i++) {
          for (let j = 0; j < grid.length; j++) {
            if (liveNeighbourCount(i, j) == 3 && grid[i][j] == 0) {
              console.log("MUTATED,1");
              // bring back to life
              grid2[i][j] = 5;
            } else if (
              liveNeighbourCount(i, j) == 2 ||
              liveNeighbourCount(i, j) == 3
            ) {
              console.log("MUTATED,2", liveNeighbourCount(i, j));
              // Keep cell
              grid2[i][j] = grid[i][j];
            } else if (liveNeighbourCount(i, j) > 3) {
              console.log("MUTATED,3");
              // Kill cell
              grid2[i][j] = 0;
            } else if (liveNeighbourCount(i, j) < 2) {
              console.log("MUTATED,4");
              // Kill cell
              grid2[i][j] = 0;
            }
          }
        }

        console.log("Grid2exit:", grid2);

        // grid = JSON.parse(JSON.stringify(grid2));

        copyGrid(1);
      }, 500);
      // }
      // grid[7][1] = 5;
    };

    const liveNeighbourCount = (i, j) => {
      let neighbourCount = 0;

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

      // console.log("NBC: ", neighbourCount, i, j);
      return neighbourCount;
    };

    const copyGrid = (mode) => {
      for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
          if (mode == 1) {
            // grid = grid2
            grid[i][j] = grid2[i][j];
          } else {
            // grid2 = grid
            grid2[i][j] = grid[i][j];
          }
        }
      }
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
