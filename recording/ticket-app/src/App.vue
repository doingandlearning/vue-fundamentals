<template>
 <div class="top-bar">
      <h1 class="site-title">Online Events</h1>
    </div>
    <div id="app">
      <div class="container">
        <div class="left">
          <h1>{{title.toUpperCase()}}</h1>
          <p v-if="tickets > 15">On sale now!</p>
          <p v-else-if="tickets < 15 && tickets > 0">Tickets are running low!</p>
          <p v-else>Sorry. We're sold out.</p>
          <ul>
            <li v-for="detail of details" :key="detail">{{detail}}</li>
          </ul>
          <ul class="ticketTypes">
            <li class="ticketSelector" 
                @mouseover="updateImage(type.id)"
                v-for="type in ticketTypes"
                :key="type.name">
              {{type.name}}
            </li>
          </ul>
          <div>
            <h2>Ticket Types</h2>
            <h3 v-if="error">Sorry, we're having trouble getting the ticket types. Try again later.</h3>
            <div v-for="type in ticketTypes" :key="type.id">
              <ticket-details 
                :name="type.name"
                :description="type.description"
                :tickets="type.tickets"
                @buy-tickets="buyTickets"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <img class="base-class" :class="[{'sold-out': soldOut}, {hidden: hidden}]" :src="image"/>
        </div>
      </div>
      <div class="cart">Tickets ({{cart}})</div>
    </div>
</template>

<script>
import TicketDetails from './components/TicketDetails.vue'
import "./assets/styles.css"
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
