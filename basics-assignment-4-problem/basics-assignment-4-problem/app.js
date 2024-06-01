const app= Vue.createApp({
    data(){
        return{
            firstClass:"",
            hide:false,
            dynamic:""
        }
    },
    methods:{
        changeClass(){
            this.hide=!this.hide
        }
    }
})
app.mount("#assignment")