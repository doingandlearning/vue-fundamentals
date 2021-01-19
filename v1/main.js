const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      title: "Comedy Show",
      description: "This show will be amazing!",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      ticketTypes: [
        { id: "ticket", name: "Bronze", image: "", tickets: 3 },
        { id: "silverTicket", name: "Silver", image: "", tickets: 10 },
        { id: "goldTicket", name: "Gold", image: "", tickets: 40 }
      ]
    }
  },
  methods: {

  }, computed: {

  }

})