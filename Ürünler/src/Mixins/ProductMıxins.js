export const mixinsloding = {
    data(){
        return{
            saveButtonClick:false
        }
    },
    computed: {
        saveDisable() {
            if (this.product.title.length > 0 && this.product.count > 0 && this.product.price > 0 && this.product.description.length > 0) {
                return false;
            } else {
                return true;

            }
        },
        isloading() {
            if (this.saveButtonClick) {
                return {
                    display: "block"
                }
            } else {
                return {
                    display: "none"
                }
            }

        }
    }


}
