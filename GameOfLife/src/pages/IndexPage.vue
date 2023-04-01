<template>
  <q-page class="flex flex-center bg-green-4">
    <div class="q-pa-md" style="max-width: 600px; width: 100%">
      <q-card class="bg-yellow shadow-10">
        <q-card-section>
          <q-card-section class="q-pa-sm">
            <h2 class="text-center q-my-md">Game of Life</h2>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-select
        filled
        transition-show="flip-up"
        transition-hide="flip-down"
        class="q-my-lg shadow-10 bg-orange-3"
        style="width: 100%; border-radius: 10px"
        v-model="selectedGrid"
        :options="gridOptions"
      ></q-select>
      <div class="row flex flex-center">
        <q-btn
          label="START GAME!"
          style="width: 300px; height: 50px"
          class="bg-purple-2 text-purple"
          @click="generateGrid"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, defineComponent } from "vue";
import { useCounterStore } from "../stores/GameConfig";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const gameConfigStore = useCounterStore();
    const router = useRouter();

    let gridOptions = ref([
      {
        id: 1,
        label: "10 x 10",
        row: 10,
        col: 10,
      },
      {
        id: 2,
        label: "20 x 20",
        row: 20,
        col: 20,
      },
      {
        id: 3,
        label: "30 x 30",
        row: 30,
        col: 30,
      },
      {
        id: 4,
        label: "50 x 50",
        row: 50,
        col: 50,
      },
      {
        id: 5,
        label: "100 x 100",
        row: 100,
        col: 100,
      },
    ]);

    let selectedGrid = ref({
      id: 1,
      label: "10 x 10",
      row: 10,
      col: 10,
    });

    const generateGrid = () => {
      gameConfigStore.generateGrid();
      router.push("/game");
    };

    return {
      gridOptions,
      selectedGrid,
      generateGrid,
    };
  },
});
</script>
