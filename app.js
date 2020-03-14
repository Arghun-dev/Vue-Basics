new Vue({
    el: '#app',

    data: {
        title: 'Arghun You will do it',
        name: 'Arghun',
        showName: false,
        showAge: false,
        age: 25,
        wage: 10,
        url: 'http://www.google.com',
        classes: 'one two',
        colors: ['black', 'blue', 'yellow'],
        persons: [
            {name: 'arghun', age: 25, job: 'software developer'},
            {name: 'sahand', age: 21, job: 'computer student'},
            {name: 'shahla', age: 50, job: 'Mom'}
        ],
        coords: {
            x: 0,
            y: 0
        }
    },

    methods: {
        greet(time){
            return `Hello good ${time}, ${this.name}`
        },

        increase(amount){
            this.wage = this.wage + amount
        },

        decrease(amount){
            this.wage = this.wage - amount
        },

        logEvent(e){
            console.log(e)
        },

        changeCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },

        updateName(e){
            this.name = e.target.value
        },

        logMessage(){
            console.log('hello world')
        },

        toggleName(){
            this.showName = !this.showName
        },

        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})