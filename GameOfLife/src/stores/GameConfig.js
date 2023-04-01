import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    selectedGrid: {
        id: 1,
        label: "10 x 10",
        row: 10,
        col: 10,
    },
    grid:[]
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    },

    // Generate Grid based on given Grid size
    generateGrid() {
      this.grid = []
      for (let i = 0; i < this.selectedGrid.row; i++) { 

        let tempRow = []

        for (let j = 0; j < this.selectedGrid.col; j++){
            tempRow.push(0)
        }
        this.grid.push(JSON.parse(JSON.stringify(tempRow)))
      }
    }
  }
})
