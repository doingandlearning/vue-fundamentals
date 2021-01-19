console.log("here")
app.component('ticket-details', {
  props: {
    name: String,
    tickets: Number
  },
  template:
    /*html*/
    `
    <div>
    <h3>{{name}}</h3>
    <div>
    <select v-model="ticketsToBuy">
      <option value=0>0</option>
      <option v-for="number in tickets" :value="number" >{{number}}</option>
    </select>
      <div v-if="ticketsToBuy">
        <p>Add {{ticketsToBuy}} {{name}} tickets to your cart.</p>
        <button @click="addToCart">Add</button>
      </div>
    </div>
    {{tickets}} left.
    </div>
  `,
  data() {
    return {
      ticketsToBuy: 0
    }
  },
  methods: {
    addToCart() {
      this.tickets -= this.ticketsToBuy
      this.$emit('add-to-cart', this.ticketsToBuy)
    }
  }
})