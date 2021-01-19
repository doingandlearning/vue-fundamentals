<template>
<div>
    <div class="top-bar">
      <h1 class="site-title">Online Events</h1>
    </div>
    <div class="cart">Tickets ({{cart}})</div>
    <div class="container">
      <div class="left">
        <img :class="{'soldout': soldOut}" :src="image"/>
      </div>
      <div class="right">
        <h1>{{title.toUpperCase()}}</h1>
        <p v-if="tickets > 15">On sale now!</p>
        <p v-else-if="tickets <= 15 && tickets > 0">Tickets running low!</p>
        <p v-else>Sold out!</p>
        <p>{{description}}</p>
        <ul>
         <li v-for="detail in details" :key="detail">{{detail}}</li>
        </ul>
        <ul class="ticketTypes">
          <li class="ticketSelector" @mouseover="updateImage(type.id)" v-for="type in ticketTypes" :key="type.id">{{type.name}}</li>
        </ul>
        <div>
          <h3>Ticket Types</h3>
          <div v-for="ticketType in ticketTypes" :key="ticketType.id">
            <ticket-details 
              @add-to-cart="updateCart" 
              :name="ticketType.name" 
              :tickets="ticketType.tickets"
              :description="ticketType.description"
              ></ticket-details>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import TicketDetails from './components/TicketDetails.vue'

export default {
  name: 'App',
  components: {
    TicketDetails
  },
  data() {
    return {
      cart: 0,
      title: "Comedy Show",
      description: "This show will be amazing!",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      ticketTypes: [
        { id: "bronzeTicket", name: "Bronze", image: "http://www.fillmurray.com/200/200", tickets: 3, description: "This is a bronze level fun." },
        { id: "silverTicket", name: "Silver", image: "http://www.fillmurray.com/200/202", tickets: 10, description: "This is some silver level fun." },
        { id: "goldTicket", name: "Gold", image: "http://www.fillmurray.com/199/199", tickets: 40, description: "Go all in - this is the gold level!" }
      ]
    }
  },
  methods: {
    updateCart(num) {
      this.cart += num
    },
    updateImage(id) {
      this.image = this.ticketTypes.filter(type => type.id === id)[0].image
    }
  }, computed: {
    tickets() {
      return this.ticketTypes.map(ticket => ticket.tickets).reduce((a, c) => a + c) - this.cart
    },
    soldOut() {
      return this.tickets === 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
