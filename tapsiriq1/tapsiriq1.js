const app=Vue.createApp({
    data(){
        return{
            outputname:'asdf',
            outputage:20,
            urllink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjfSbNpz456oMg1iC-ihCvLYPv6TzPN0Bu60CnCCK4Yj33rKBbHv1EEskXMitDFxIbYI&usqp=CAU"
            }
    },
    methods:{
        calculateAge(){
            return this.outputage+5
        },
        calculaterandom(){
            return Math.floor(Math.random())
        }
    }
}).mount('#assignment')