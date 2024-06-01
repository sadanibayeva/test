const app=Vue.createApp({
    data() {
        return {
          output: '',
        confirminput: ''
        };
    },
        methods: {
            submittedformm(){
                alert('submit');
            },
            confirmInput(event){
                console.log(event);
                this.output=event.target.value
            },
            confirminputt(event){
                this.confirminput=this.output
            }
          }
})
app.mount('#assignment');