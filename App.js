Vue.createApp({
    data(){
        return{
            goals : [],
            value: ''
        };
    },
    methods: {
        setGoal() {
            this.goals.push(this.value);
            this.value = '';
        }
    }
}).mount('#app');