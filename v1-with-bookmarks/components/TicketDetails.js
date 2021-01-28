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
    </div>
    {{description}}
    </div>
  `
})