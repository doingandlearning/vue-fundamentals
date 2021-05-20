const app = Vue.createApp({
  data() {
    return {
      title: "Comedy Event",
      tickets: 10,
      image: "http://www.fillmurray.com/200/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      cart: 0,
      ticketTypes: [],
      hidden: false,
      soldOutClass: 'sold-out',
      hiddenClass: 'hidden',
      message: '',
      error: false
    }
  },
  methods: {
    updateCart(number = 1) {
      this.cart = this.cart + number
      this.tickets = this.tickets - number
    },
    updateImage(id) {
      this.image = this.ticketTypes.filter(type => type.id === id)[0].image
    },
    buyTickets(numberOfTickets, nameOfTicket) {
      console.log(`Buy ${numberOfTickets} ${nameOfTicket} tickets.`)
      this.cart = this.cart + numberOfTickets
    }
  },
  computed: {
    soldOut() {
      return this.tickets === 0;
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/doingandlearning/vue-fundamentals/main/data.json')
      .then(response => this.ticketTypes = response)
      .catch(error => this.error = true)
  }
});
