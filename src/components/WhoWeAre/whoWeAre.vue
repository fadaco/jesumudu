<template>
    <div class="who">
        <h2 class="center">Who we are</h2>
    <div class="tabs">
       <div class="tabs-1">
           <div>
           <img src="../../assets/diamond-img.svg">
           </div>
           <div class="tabText boldText">Value driven</div>
           <div class="tabText bodT">To be the best among the rest<br>
           in providing Education, Self-<br>
               Discovery and fulfilment of
           </div>
       </div>
       <div class="tabs-2">
           <div>
               <img src="../../assets/professional-img.svg">
           </div>
           <div class="tabText boldText">Professional</div>
           <div class="tabText bodT">We thrive in, Professionalism, <br>
           Integrity, Confidence and <br>
               going the extra miles
           </div>
       </div>
       <div class="tabs-3">
           <div>
               <img src="../../assets/commited-img.svg">
           </div>
           <div class="tabText boldText">Committed</div>
           <div class="tabText bodT">We thrive in, Professionalism, <br>
               Integrity, Confidence and <br>
               going the extra miles</div>
       </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "whoWeAre"
    }
</script>

<style scoped>
    .tabs {
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        width: 80%;
    }

    .tabs-1 {
        background-image: url("../../assets/card.svg");
        background-size: cover;
        padding: 75px 54px;
    }

    .tabs-2 {
        background-image: url("../../assets/grp2.svg");
        background-size: cover;
        padding: 75px 54px;
    }

    .tabs-3 {
        background-image: url("../../assets/Group3.svg");
        background-size: cover;
        padding: 75px 54px;
    }

    .who {
        background: #f8f7fd;
        padding: 40px 0;
    }

    .center {
        text-align: center;
    }

    .tabText {
        color: #5340BC;
    }

    .boldText {
        font-size: 21px;
        font-weight: bold;
        margin: 20px 0;
    }

    .tabs img {
        width: 38%;
    }

    .bodT {
        font-weight: bold;
    }
</style>