<template>
    <div id="navigation-mobile">
        <div class="search">
            <input type="text" placeholder="Search...">
            <i class="fas fa-search"></i>
        </div>
        <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Magazin</li>
            <li>Editors</li>
            <li>Readers</li>
             
        </ul>
        <div class="social-media">
            <i class="fab fa-facebook "></i>
            <i class="fab fa-twitter "></i>
            <i class="fab fa-instagram "></i>
            <i class="fab fa-pinterest "></i>
        </div>
      
    </div>
</template>
<style lang="scss" scoped>

.search{
    position: relative;
    width: 250px;
    margin-bottom: 20px;
    padding-left: 20px;
   

    input{
        border: none;
        outline: none;
        width: calc(100% - 80px);
         margin:0;
    padding:15px 60px 15px 20px;
    border-radius: 20px;
    background-color: #efefef;
    font-size: 1rem;


    }
    i{
        position: absolute;
        top:20%;
        right: 10px;
        font-size: 2rem;
        color: #333;

    }
}
#navigation-mobile{
    padding: 10px 0 0;
}
ul{
    list-style: none;
    width: 200px;
    padding: 0;

    li{
        color:#fff;

        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
        padding: 2px 10px;
        cursor: pointer;
        transition: .3s all;

        &:hover{
            color: #111;
        }
    }
}
.social-media{
     position: absolute;
    left: 10px;
    bottom: 10px;
width: 250px;

i{
   color:#fff;
   font-size: 2rem;
   margin-left: 20px;
   transform: translateY(0px);
   transition:  .5s all;

   &:first-child{
       margin-left: 0;
   }
   &:hover{
       color: gray;
       transform: translateY(-10px);
   }
}
}

</style>