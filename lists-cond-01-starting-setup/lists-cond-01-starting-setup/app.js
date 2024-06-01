const app = Vue.createApp({
  data() {
    return {
    enteredGoalValue: '',
    goals: [] 
  };
},
  methods:{
    addgoal(){
      this.goals.push(this.enteredGoalValue);
    },
    removedgoal(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
//returndeki goals nece olrki inputdaki deyere beraberdir