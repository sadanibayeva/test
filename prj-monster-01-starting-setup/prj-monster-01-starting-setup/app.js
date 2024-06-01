function getrandomvalue(min,max){
    return Math.floor(Math.random() * (max-min))+min;
}
const app=Vue.createApp({
    data(){
        return{
           playerhealth:100,
           monsterhealth:100,
           currentround:0,
           winner:null
        }
    },
    computed:{
        monsterbarstyles(){
            if(this.monsterhealth<0){
                return {width : '0%'};
            }
            return {width: this.monsterhealth + '%'}
        },
        playerbarstyles(){
            if(this.playerhealth<0){
                return {width : '0%'};
            }
            return {width: this.playerhealth + '%'}
        },
        mayusespecialattacted(){
            return this.currentround % 3 !==0
        }
    },
    watch:{
        playerhealth(value){
            if(value<=0 && this.monsterhealth.value<=0){
                this.winner='draw'
            }
            else if(value<=0){
               this.winner='monster'
            }
        },
        monsterhealth(value){
            if(value<=0 && this.playerhealth.value<=0){
                this.winner='draw'
            }
            else if(value<=0){
                this.winner='player'
            }
        }
    },
    methods:{
        startgame(){
           this.playerhealth=100,
           this.monsterhealth=100,
           this.currentround=0,
           this.winner=null
        },
        attackmonster(){
           this.currentround++;
           const attactvalue=getrandomvalue(5,12);
           this.monsterhealth-=attactvalue;
           this.attactplayer();
        },
        attactplayer(){
           const attactvalue=getrandomvalue(8,15);
           this.playerhealth-=attactvalue;
        },
        specialattackmonster(){
           this.currentround++;
           const attactvalue=getrandomvalue(10,25);
           this.monsterhealth-=attactvalue;
           this.attactplayer()
        },
        healplayer(){
           this.currentround++;
            const healvalue=getrandomvalue(10,25)
            if(this.playerhealth+healvalue>100){
                this.playerhealth=100
            }
            else{
                this.playerhealth+=healvalue
            }
            this.attactplayer()
        }
    }
}).mount('#game')
//currentroundu bide sayda her atista nece olur?
//mende neticede her defe it is a draw da cxarir niye?