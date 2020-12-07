Vue.component('way', {

    data() {
        return {
            way: 'Дом -> опросы -> добавить опрос'
        }
    },

    methods: {
    },

    template: `
            <button class="main-header-way-item">
                {{this.way}}
            </button>
    `

})