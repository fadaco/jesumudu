<template>
    <div class="who">
        <h2 class="center">Who we are</h2>
    <div class="tabs">
       <div class="tabs-1">
           <div>
           <img src="../../../assets/diamond-img.svg">
           </div>
           <div class="tabText boldText">Value driven</div>
           <div class="tabText bodT">To be the best among the rest<br>
           in providing Education, Self-<br>
               Discovery and fulfilment of
           </div>
       </div>
       <div class="tabs-2">
           <div>
               <img src="../../../assets/professional-img.svg">
           </div>
           <div class="tabText boldText">Professional</div>
           <div class="tabText bodT">We thrive in, Professionalism, <br>
           Integrity, Confidence and <br>
               going the extra miles
           </div>
       </div>
       <div class="tabs-3">
           <div>
               <img src="../../../assets/commited-img.svg">
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
        width: 90%;
        flex-wrap: wrap;

    }


    .tabs-1 {
        background-image: url("../../../assets/card.svg");
        background-size: cover;
        padding: 75px 54px;
        box-shadow: 0 10px 20px 0 rgba(0,0,0, 0.08);
        color: #251871;
        border-radius: 5px;
    }

    .tabs-2 {
        background-image: url("../../../assets/grp2.svg");
        background-size: cover;
        padding: 75px 54px;
        box-shadow: 0 10px 20px 0 rgba(0,0,0, 0.08);
        border-radius: 5px;
    }

    .tabs-3 {
        background-image: url("../../../assets/Group3.svg");
        background-size: cover;
        padding: 75px 54px;
        box-shadow: 0 10px 20px 0 rgba(0,0,0, 0.08);
        border-radius: 5px;
    }

    .who {
        background: #f8f7fd;
        padding: 75px 0;

    }

    .center {
        text-align: center;
        font-size: 35px;
        color: #170E46;
        margin: 0 0 40px 0;
    }

    .tabText {
        color: #5340BC;
    }

    .boldText {
        font-size: 21px;
        font-weight: 800;
        margin: 20px 0;
        color: #251871;
    }

    .tabs img {
        width: 30%;
    }

    .bodT {
        font-weight: 600;
        opacity: 0.7;
        line-height: 1.5em;
        color: #251871;
        letter-spacing: 0.5px;
        font-size: 15px;
    }

    @media only screen and (max-width: 415px ) {
        .tabs div {
            margin: 10px 0;
            border: 4px;
            color: #251871;
        }

        .boldText {
            font-size: 28px;

        }

        .bodT {
            font-size: 15px;
        }

    }
</style>