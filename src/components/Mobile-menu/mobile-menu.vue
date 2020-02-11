<template>
    <div>
        <header class="naf">


        <div class="twin">
            <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav"  >
                <i class="fas fa-bars" style="font-size: 25px;"></i>
            </div>

            <div class="log"><router-link to="/"><h2>LOGO</h2></router-link> </div>
        </div>


            <div class="top" :class="{'open':showNav}" id="tp" @click="showNav = !showNav">
                <div class="reg"><router-link class="bld" to="/register"><a style="color:#5340BC; padding: 0">Register</a></router-link></div>
                <router-link to="/about"> <a>About Us</a></router-link>
                <router-link to="/courses"> <a>Courses</a></router-link>

            </div>
        </Header>
    </div>

</template>

<script>
    export default  {

        data: () => {
            return {
                mobileView: false,
                showNav: true,
                changeUp: false,
            };
        },
        name: 'mobileNav',

        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990;
            },


        },
        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        }
    }

</script>

<style scoped lang="scss">
    #navigation-icon {
        background-color: #fff;
        padding: 20px 20px;
        cursor: pointer;
    }

    .naf {
        position: fixed;
        z-index: 10000;
    }

    .open {
        display : none;

    }

    .change {

        background-color: #5340BC;
        color: #fff;

    }

    .twin {
        display: flex;
        width: 100vw;
        background-color: #fff;
        justify-content: space-between;

        .log {
            padding: 0px 20px;
        }
    }

    .reg {

        background-color: #fff;
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
        a {
            color:#5340BC;
            padding: 0 !important;
            font-weight: 600;
        }

        padding: 10px !important;
        border-radius: 50px;
        box-shadow: 0 6px 12px 0 rgba(0,0,0, 0.2);
    }

    .bld a {
        font-weight: 600;
    }


    .top  {

        background: #5340BC;
        height: 100vh;
        width: 100vw;
        transition: .5s transform cubic-bezier(0, .12, .14,1);
        padding: 20px 0px;


        a {
            display:block ;
            text-align: center;
            text-decoration: none;
            color: white;
            font-size: 25px;
            padding: 20px 0 0 0;
            font-weight: 700;

        }
        


    }

</style>