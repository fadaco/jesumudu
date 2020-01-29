<template>
    <div class="join">
    <div class="join-one">
        <div>
        <div class="joinHeader">Join the academy</div>
        <div>Lorem ipsum dolor sit amet, vix te eruditi <br>voluptatibus.</div>
            <div><router-link to="/register"><button class="apply">Apply Now</button></router-link></div>
        </div>
    </div>
        <div class="join-two">
          <!--  <img src="../../assets/img-grp.svg">-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "join"
    }
</script>

<style scoped>
    .join {
        display: flex;
        height: 350px;
    }
    .join-one {
        background: rgb(83, 64, 188);
        color: #ffffff;
        padding: 68px 4%;
        width: 50%;
    }

    .join-two {
        width: 50%;
        background-image: url("../../../assets/img-grp.svg");
        background-size: cover;
    }

    .join-two img {
        height: 100%;
    }

    .joinHeader {
        font-size: 3.1em;
        font-weight: 500;
    }


    .apply {
        margin: 20px 0;
        color: rgb(83, 64, 188);
        padding: 17px 37px;
        font-size: 26px;
        border-radius: 32px;
        cursor: pointer;
    }

    @media only screen and (max-width: 415px ) {

        .join-two{
            display: none;
        }

        .join-one {
            width: 100%;
            text-align: center;
            /*padding: 35px 4%;*/
        }

        .joinHeader {
            font-size: 2.5em;

        }

    }

</style>