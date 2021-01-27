
const app = Vue.createApp({
  data() {
    return {
      title: "Comedy Events",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      soldOut: false,
      tickets: 10,
      cart: 0,
      ticketTypes: [
        { id: "bronzeTicket", name: "Bronze", image: "http://www.fillmurray.com/200/200", tickets: 3, description: "This is a bronze level fun." },
        { id: "silverTicket", name: "Silver", image: "http://www.fillmurray.com/200/202", tickets: 10, description: "This is some silver level fun." },
        { id: "goldTicket", name: "Gold", image: "http://www.fillmurray.com/199/199", tickets: 40, description: "Go all in - this is the gold level!" }
      ],
    }
  }
});

app.config.devtools = true;