const app = Vue.createApp({
  data() {
    return {
      title: "Comedy Event",
      tickets: 10,
      image: "http://www.fillmurray.com/200/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      cart: 0,
      ticketTypes: [
        {
          "id": "bronzeTicket",
          "name": "Bronze",
          "image": "http://www.fillmurray.com/200/200",
          "tickets": 3,
          "description": "This is a bronze level fun."
        },
        {
          "id": "silverTicket",
          "name": "Silver",
          "image": "http://www.fillmurray.com/200/202",
          "tickets": 10,
          "description": "This is some silver level fun."
        },
        {
          "id": "goldTicket",
          "name": "Gold",
          "image": "http://www.fillmurray.com/199/199",
          "tickets": 40,
          "description": "Go all in - this is the gold level!"
        }
      ],
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
