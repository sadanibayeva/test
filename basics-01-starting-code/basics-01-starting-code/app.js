const app=Vue.createApp({
    data(){
        return{
            courseGoalA: 'finish',
            courseGoalB: '<h3>begin</h3>',
            vuelink:'https://vuejs.org/'
        };
    },
    methods:{
        outputgoal(){
            const randomnumber=Math.random();
            if(randomnumber<0.5){
              return this.courseGoalA;  
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');