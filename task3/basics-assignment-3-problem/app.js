const app=Vue.createApp({
data(){
    return {
    number: 0
    }
},
methods: {
    addnumber(num){
        this.number=this.number+num
    }
},
computed: {
    result(){
        if(this.number<37){
            return 'Not there yet'
        }
        else if(this.number==37){
            return this.number
        }
        else{
            return 'Too much'
        }
    }
},
watch:{
    number(value){
        if(value>0){
            const that=this
            setTimeout(()=>{
                that.number=0
            },5000)
        }
    }
}
//burda niye computed?
//sorki taski anlamadm watch olan?
}).mount('#assignment')
