Vue.component('user', {

    data() {
        return {
            userSearch: '',
            name: 'Alexander C.',
            status: 'Администратор'
        }
    },

    methods: {
    },

    template: `
            <div>
                <p class="main-header-user">
                    <img src="#" alt="аватарка" class="main-header-user-img">
                <div class="main-header-user-item">
                    <p class="main-header-user-name">{{this.name}}</p>
                    <p class="main-header-user-status">{{this.status}}</p>
                </div>
            </div>
    `

})