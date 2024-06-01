const app = Vue.createApp({
    data(){
        return{
            goals: [],
            enteredvalue:'',
            goallistvisible:true
        }
    },
    computed:{
        buttoncaption(){
            return this.goallistvisible ? 'hide List' : 'show List'
        }
    },
    methods:{
        addgoal(){
        this.goals.push(this.enteredvalue)
        },
        togglelist(){
            this.goallistvisible=!this.goallistvisible
        }
    } 
}).mount('#assignment')