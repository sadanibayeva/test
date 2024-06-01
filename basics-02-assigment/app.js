const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedname:''
    };
  },
  methods: {
    confirminput(){
      this.confirmedname=this.name
    },
    submittedform(event){
      // event.preventDefault()
        alert('submitt');
    },
      // setname(event){
      //   this.name=event.target.value
      //   // this.name=this.name+ghjj
      // },
    add(n){
      this.counter=this.counter+n
    },
    reduce(n){
      this.counter=this.counter-n
    },
    ResetName(){
      this.name=""
    }
  },
  computed:{
    outputFullName(){
      console.log("yene isledi bu.....");
      if(this.name===""){
        return ""
      }
      return this.name+" "+"Ibayeva"
    }
  }
})
app.mount('#events');