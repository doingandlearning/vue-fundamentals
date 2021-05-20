<template>
  <div>
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <select v-model="ticketsToBuy">
      <option :value=0>0</option>
      <option v-for="number in ticketsLeft" :value="number" :key="number">{{number}}</option>
    </select>
    <button v-if="ticketsToBuy > 0" @click="addTickets(ticketsToBuy)">Adds tickets</button>
  </div>
</template>

<script>
export default {
  name: 'TicketDetails',
  props: {
    name: String,
    description: String,
    tickets: Number
  },
  data() {
    return {
      ticketsToBuy: 0,
      ticketsLeft: this.tickets
    }
  },
  methods: {
    addTickets(num) {
      this.ticketsLeft -= num
      this.$emit('buyTickets', this.ticketsToBuy, this.name)
      this.ticketsToBuy = 0
    }
  }
}
</script>
