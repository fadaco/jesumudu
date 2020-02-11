<template>
    <div>
        <!--<mobileNavigation class="fixed"/>-->



        <div class="content" :class="{'open':showNav}">
            <mobileNav v-if="mobileView"/>

                <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav" >
                    <i class="fas fa-bars" style="font-size: 25px;"></i>
                </div>



            <HeadName v-if="!mobileView"/>
            <Banner/>
            <WhoWeAre/>
            <Study/>
            <Alumni/>
            <Join/>
            <Foot/>
        </div>

    </div>

</template>

<script>
    import mobileNav from './components/Mobile-menu/mobile-menu';
    // import mobileNavigation from './components/Mobile-menu/mobileNavigtion';
    import HeadName from './components/Shared/Header/header';
    import Banner from './components/Banner/banner';
    import WhoWeAre from './components/Home/WhoWeAre/whoWeAre';
    import Study from './components/Home/Study/study';
    import Alumni from './components/Home/Alumni/alumni';
    import Join from './components/Home/Join/join';
    import Foot from './components/Shared/Footer/footer';
    export default {

        data: () => {
            return {
                mobileView: true,
                showNav: false,
            };
        },
        name: "HomePage",

        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990;
            }
        },
        components: {
            mobileNav,
            // mobileNavigation,
            HeadName,
            Banner,
            WhoWeAre,
            Study,
            Alumni,
            Join,
            Foot
        },
        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        }

    }
</script>

<style scoped lang="scss">

    #navigation-icon{
        padding: 10px 10px 10px;
        margin-right: 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        z-index: 100;
        position: fixed;
        background-color: #fff;
        width: 100vw;
        display: none;

    }

    i {
        font-size: 30px;
    }

    .content {
        position: absolute;
        top: 0px;
        background-color: #fff ;
        /*transition: .5s transform cubic-bezier(0, .12, .14,1);*/
    }

    /*.open {*/
        /*transform: translateX(100vw);*/
    /*}*/

    .fixed {
        display: none;
    }

</style>