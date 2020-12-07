Vue.component('condition', {

    data() {
        return {
            number: 1
        }
    },

    methods: {
    },

    template: `
            <div class="main-pull-condition">
                <p>Условие {{number}}</p>
                <select name='condition_list' id="condition_list${this.number}">
                    <option value="choose">
                        Выбирите условие
                    </option>
                    <option value="age">
                        Возраст респондента
                    </option>
                    <option value="type">
                        Тип карты лояльности
                    </option>
                    <option value="status">
                        Статус карты лояльности
                    </option>
                </select>
                <button>Удалить условие</button>
            </div>
    `

})