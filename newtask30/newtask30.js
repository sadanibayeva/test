const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        name:''
      };
    },
    methods: {
      outputfullname(){
        if(this.name===''){
            return ''
        }
        return this.name+''+'csdk';
      },
      setname(event){
        this.name=event.target.value
      },
      add(n){
        this.counter=this.counter+n
      },
      reduce(n){
        this.counter=this.counter-n
      },
      resetinput(){
        this.name=''
      }
    }
  })
  app.mount('#events');