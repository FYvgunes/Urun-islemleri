<template>
    <div class="content">
        <div class="teaser">
            <div class="teaser-content">
                Read More 
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        <div class="infobox">
            <div class="title">Articles</div>
            <div class="value">128</div>
        </div>
                <div class="infobox">
            <div class="title">Readers</div>
            <div class="value">18</div>
        </div>
                <div class="infobox">
            <div class="title">Likes</div>
            <div class="value">50</div>
        </div>
                <div class="infobox">
            <div class="title">Comments</div>
            <div class="value">128</div>
        </div>
    
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.teaser{
    position: relative;
    widows: 100%;
    max-width: 786px;
    height: 400px;
    margin-bottom: 40px;
    margin-top: 40px;
    background-image: url("../assets/rainy.jpg");
    background-size: cover;
    background-position: top;
    border-radius: 20px;
    overflow: hidden;

}
.teaser-content{
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 180px;
    height: 50px;
    padding: 0 0 0 20px;
    background-color: #111;
    color: #efefef;
    border-radius: 12px;
    font-size: 1.6rem;
    cursor: pointer;
    line-height: 40px;

    i{
        font-size: 1.4rem;
    }


}
.infobox{
    float: left;
    width: 80px;
    height: 80px;
    padding: 10px;
    margin: 0 20px 20px 0;
    border-radius: 20px;
    border:1px solid #ccc;
    

    .title{
        font-weight: bold;
    }
    .value{
        padding: 10px 0 0 0;
        font-size: 1.2rem;
    }

}

</style>