<template>
  <q-page class="flex flex-center bg-green-4">
    <div class="q-pa-md" style="max-width: 600px; width: 100%">
      <q-card class="bg-yellow shadow-10">
        <q-card-section>
          <q-card-title class="q-pa-sm">
            <h2 class="text-center q-my-md">Game of Life</h2>
          </q-card-title>
        </q-card-section>
      </q-card>
      <q-select
        filled
        class="q-my-lg shadow-10 bg-orange-3"
        style="width: 100%; border-radius: 10px"
      ></q-select>
      <div class="row flex flex-center">
        <q-btn
          label="START GAME!"
          style="width: 300px; height: 50px"
          class="bg-purple-2 text-purple"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
