Vue.component('condition', {

    data() {
        return {
            userSearch: ''
        }
    },

    methods: {
    },

    template: `
            <form action="#" class="search-form">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="bts-search" type="button" @click="filter(userSearch)">Поиск</button>
            </form>
    `

})