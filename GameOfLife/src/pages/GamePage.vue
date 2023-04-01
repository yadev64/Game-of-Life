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
  // name: 'PageName',
};
</script>
