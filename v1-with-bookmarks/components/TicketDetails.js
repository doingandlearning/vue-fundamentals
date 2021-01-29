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
    <select>
      <option value=0>0</option>
      <option v-for="number in ticketsLeft" :value="number" >{{number}}</option>
    </select>
    <button @click="addTicket">-</button>
    </div>
    {{description}}
    </div>
  `,
  data() {
    return {
      ticketsLeft: this.tickets
    }
  },
  methods: {
    addTicket() {
      this.ticketsLeft -= 1
    }
  }
})