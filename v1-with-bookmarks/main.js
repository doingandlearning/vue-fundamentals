
const app = Vue.createApp({
  data() {
    return {
      title: "Comedy Events",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      tickets: 10,
      cart: [],
      ticketTypes: null,
      error: false
    }
  },
  methods: {
    updateCart(amount, type) {
      const newItems = Array(amount).fill(type)
      this.cart = [...this.cart, ...newItems]
    },
    changeImage(id) {
      this.image = this.ticketTypes.filter(type => type.id === id)[0].image
    }
  },
  mounted() {
    axios.get("https://raw.githubusercontent.com/doingandlearning/vue-fundamentals/main/data.json")
      .then(data => this.ticketTypes = data)
      .catch(err => this.error = err)
  }
});

app.config.devtools = true;