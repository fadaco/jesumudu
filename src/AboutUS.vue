<template>
    <div class="content">
        <mobileNav/>
        <HeadName v-if="!mobileView"/>
        <AboutUsBanner/>
        <AboutUsContent/>
        <Foot/>
    </div>
</template>

<script>

    import mobileNav from './components/Mobile-menu/mobile-menu';
    import HeadName from './components/Shared/Header/header';
    import AboutUsBanner from "./components/Banner/AboutUsBanner";
    import AboutUsContent from "./components/AboutUs/Content/AboutUsContent";
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "AboutUS",

        data: () => {
            return {
                mobileView: true,
                showNav: false,
            };
        },

        methods: {
            handleView() {
                this.mobileView = window.innerWidth <= 990;
            }
        },
        components: {
            mobileNav,
            HeadName,
            AboutUsBanner,
            AboutUsContent,
            Foot
        },

        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        }
    }
</script>

<style scoped>

</style>