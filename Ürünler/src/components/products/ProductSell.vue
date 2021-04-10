<template>
  <div class="container">
    <div class="loading" :style="isloading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr/>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedprodoct" @change="productChange">
              <option selected disabled>Pleace Check Product</option>
              <option

                  :disabled="products.count==0"
                  :value="products.key"
                  v-for="products in getproducts">{{ products.title }}
              </option>

            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Stok : {{ product.count }}</span>
                      <span class="badge badge-primary">Fiyat :{{ product.price |currency }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <div class="form-group">
            <label>Adet</label>
            <input
                @keyup="productcount"
                :style="ProductColorChange"
                v-model="product_count"
                type="text"
                class="form-control"
                placeholder="Ürün adetini giriniz.."
            />
          </div>
          <hr/>
          <button @click="save" class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mixinsloding} from "../../Mixins/ProductMıxins";
import {mapGetters} from "vuex";

export default {
  mixins: [mixinsloding],
  data() {
    return {
      selectedprodoct: null,
      product: null,
      product_count: null
    }
  },
  computed: {
    ...mapGetters(["getproducts"]),


  },
  methods: {
    productChange() {

      this.product = this.$store.getters.getproduct(this.selectedprodoct)[0];
      console.log();

    },
    ProductColorChange() {
alert("Buataya Geldi");
      this.productcount()

    },
    productcount() {


      if (this.product.count < this.product_count) {
        let data = "borderColor:'red'";
        return {
          data
        }
        this.ProductColorChange()

      }

    },


    save() {

      let product = {
        key: this.selectedprodoct,
        count: this.product_count
      }
      this.$store.dispatch("sellProduct", product)
    }
  }

};
</script>
<style></style>
