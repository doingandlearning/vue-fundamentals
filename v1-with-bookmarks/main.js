
const app = Vue.createApp({
  data() {
    return {
      title: "Comedy Events",
      image: "https://via.placeholder.com/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
    }
  }
});

app.config.devtools = true;