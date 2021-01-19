const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      title: "Comedy Show",
      description: "This show will be amazing!",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      ticketTypes: [
        { id: "bronzeTicket", name: "Bronze", image: "http://www.fillmurray.com/200/200", tickets: 3 },
        { id: "silverTicket", name: "Silver", image: "http://www.fillmurray.com/200/202", tickets: 10 },
        { id: "goldTicket", name: "Gold", image: "http://www.fillmurray.com/199/199", tickets: 40 }
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

  }

})