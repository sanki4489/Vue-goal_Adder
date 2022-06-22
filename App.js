Vue.createApp({
    data(){
        return{
            goals : [],
            value: ''
        };
    },
    methods: {
        setgoal() {
            this.goals.push(this.value);
            this.value = '';
        }
    }
}).mount('#app');