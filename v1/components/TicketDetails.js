console.log("here")
app.component('ticket-details', {
  props: {
    name: String,
    tickets: Number
  },
  template:
    /*html*/
    `
    <h3>{{name}}</h3>
    <p>{{tickets}} tickets remaining.</p>
  `,
  data() {
    return {
      props: {

      }
    }
  }
})