import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.prototype.$http.get('data.json').then(response => {
            if(response.data) {
                const portfolio = {
                    funds: response.data.funds,
                    stockPortfolio: response.data.stockPortfolio
                };
                commit('SET_STOCKS', response.data.stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        }
    )
}