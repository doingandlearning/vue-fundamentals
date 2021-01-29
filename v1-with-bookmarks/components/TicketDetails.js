app.component('ticket-details', {
  props: {
    name: String,
    tickets: Number,
    description: String
  },
  template:
    /*html*/
    `
    <div>
    <h3>{{name}}</h3>
    <div>
    <select v-model="ticketsToBuy">
      <option value=0>0</option>
      <option v-for="number in ticketsLeft" :value="number" >{{number}}</option>
    </select>
      <div v-if="ticketsToBuy">
        <p>Add {{ticketsToBuy}} {{name}} tickets to your cart.</p>
        <button @click="addToCart">Add</button>
      </div>
    </div>
    {{description}}
    </div>
  `,
  data() {
    return {
      ticketsToBuy: 0,
      ticketsLeft: this.tickets
    }
  },
  methods: {
    addToCart() {
      this.ticketsLeft -= this.ticketsToBuy
      this.ticketsToBuy = 0
    }
  },

})