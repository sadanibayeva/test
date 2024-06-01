Vue.createApp({
    data(){
        return{
            goals:["Sədan"],
            enteredvalue:''
        };
    },
    methods: {
        addgoal(){
            this.goals.push(this.enteredvalue);
            this.enteredvalue='';
        }
    }
    
}).mount('#app');




//const buttonie=document.querySelector("button")
// const inputie=document.querySelector("input")
// const listie=document.querySelector("ul")

// function addGoal()
// {
//     const enteredvalue=inputie.value;
//     const listitemie=document.createElement('li')
//     listitemie.textContent=enteredvalue
//     listie.appendChild(listitemie)
//     inputie.value='';
// }
// buttonie.addEventListener('click',addGoal);