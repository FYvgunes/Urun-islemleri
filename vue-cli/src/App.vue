<template>
  <div class="container">

    <app-header></app-header>
    <hr>
    <div class="row">
      <app-server></app-server>
     <app-server-details></app-server-details>

    </div>
    <hr>
    <app-footer></app-footer>
  </div>

</template>

<script>
import  Server from "./server";
import  ServerDetails from "./serverDetails";
import header from "./header";
import footer from "./footer";

export  default {

  components:{
    appHeader :     header,
    appFooter:    footer,
    appServer:    Server,
    appServerDetails:     ServerDetails
  }
}


</script>



