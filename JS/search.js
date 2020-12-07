Vue.component('search', {

    data() {
        return {
            SystemSearch: ''
        }
    },

    methods: {
    },

    template:`
            <form action="#" class="main-header-search-form">
                <input type="text" class="main-header-search-field" v-model="SystemSearch">
                <button class="main-header-bts-search" type="button" @click="filter(SystemSearch)">Поиск</button>
            </form>
    `

})