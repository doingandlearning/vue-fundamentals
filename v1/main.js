const app = Vue.createApp({
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
})