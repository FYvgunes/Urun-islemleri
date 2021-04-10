import Vue from "vue";
import {router} from "../../router";

const state = {
    products: []
};
const getters = {
    getproducts(state) {
        return state.products;
    },
    getproduct(state) {

        return key => state.products.filter(element => {

                return element.key == key

            }
        )
    }
};
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
};

const actions = {
    initApp({commit}) {
        Vue.http.get("https://vue-urunler-default-rtdb.firebaseio.com/product.json")
            .then(response => {

                let date = response.body;

                for (let key in date) {
                    date[key].key = key;
                    commit("updateProductList", date[key]);
                }


            })

    },
    saveProduct({dispatch, commit, state}, product) {
        Vue.http.post("https://vue-urunler-default-rtdb.firebaseio.com/product.json", product)
            .then((response) => {

                // Produst list update
                product.key = response.body.name;
                commit("updateProductList", product);
                let TradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", TradeResult);
                router.replace("/")

            })
        //vue Resourse prosess
    },
    sellProduct({commit, state, dispatch}, payload) {
        //vue Resourse Proses
        let product = state.products.filter(element => {

            return element.key == payload.key

        });
        let totalcount = product[0].count - payload.count;
        Vue.http.patch("https://vue-urunler-default-rtdb.firebaseio.com/product/"+payload.key+".json",{count:totalcount})
            .then(response =>{
               product[0].count = totalcount;
                let TradeResult = {
                    purchase: 0,
                    sale: product[0].price,
                    count: payload.count
                }
                dispatch("setTradeResult", TradeResult);
                router.replace("/")
            })


    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
