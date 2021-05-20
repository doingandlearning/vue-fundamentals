app.component('ticket-details', {
  props: {
    name: String,
    description: String,
    tickets: Number
  },
  template: `
  <div>
    <h4>{{name}}</h4>
    <p>{{description}}</p>
    <select v-model="ticketsToBuy">
      <option value=0>0</option>
      <option v-for="number in tickets" :value="number">{{number}}</option>
    </select>
  </div>
  `,
  data() {
    return {
      ticketsToBuy: 0
    }
  }
})