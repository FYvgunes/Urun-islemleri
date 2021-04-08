
import Vue from "vue";
export const setTradeResult = ({ state, commit },TradeResult) => {
    commit("updateTradeResult", TradeResult);
    let Result = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://vue-urunler-default-rtdb.firebaseio.com/trade-result.json",Result)
        .then(response =>{

        })



};
export const getTradeResult = ({ commit }) => {
    Vue.http.get("https://vue-urunler-default-rtdb.firebaseio.com/trade-result.json")
        .then(response =>{
            console.log(response);
            commit("updateTradeResult",response.body)
        })

};
