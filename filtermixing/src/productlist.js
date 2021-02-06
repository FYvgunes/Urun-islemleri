export const productMixin ={
  data(){
    return{
      products:["Klavye","Mause","Ekran","Nootebook","kalem"],
      searctext:''
    }
  },
  computed:{
    filtered(){
      return this.products.filter((element) =>{
        return element.match(this.searctext);
      })
    }
  }
}
