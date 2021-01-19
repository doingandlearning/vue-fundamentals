<template>
    <h3>{{name}}</h3>
    <select v-model="ticketsToBuy">
      <option value=0>0</option>
      <option v-for="number in ticketsLeft" :value="number" :key="number">{{number}}</option>
    </select>
    <div v-if="ticketsToBuy">
      <p>Add {{ticketsToBuy}} {{name}} tickets to your cart.</p>
      <button @click="addToCart">Add</button>
    </div>
    <p>{{description}}</p>
</template>

<script>
export default {
  name: 'TicketDetails',
  props: {
    name: String,
    tickets: Number,
    description: String
  },
    data() {
    return {
      ticketsToBuy: 0,
      ticketsLeft: this.tickets
    }
  },
  methods: {
    addToCart() {
      this.ticketsLeft -= this.ticketsToBuy
      this.$emit('add-to-cart', this.ticketsToBuy)
      this.ticketsToBuy = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
