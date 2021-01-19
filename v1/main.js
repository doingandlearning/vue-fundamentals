const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      tickets: 10,
      title: "Comedy Show",
      description: "This show will be amazing!",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      ticketTypes: [
        { id: "ticket", name: "Online ticket", image: "", tickets: 3 },
        { id: "ticketRecording", name: "+ Recording", image: "", tickets: 10 },
        { id: "ticketSwag", name: "+ Swag", image: "", tickets: 40 }
      ]
    }
  },
  methods: {
    addToCart() {
      if (this.tickets > 0) {
        this.cart += 1
        this.tickets -= 1
      }
      else {
        alert("No tickets left!")
      }
    }
  }, computed: {
    soldOut() {
      return this.tickets > 0
    }
  }

})