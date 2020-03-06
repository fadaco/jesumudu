<template>
   <div>
       <mobileNav v-if="mobileView"/>
       <HeaderName v-if="!mobileView"/>
       <RegisterBody/>
       <Foot/>
   </div>

</template>

<script>
    import mobileNav from './components/Mobile-menu/mobile-menu';
    import HeaderName from './components/Shared/Header/header';
    import RegisterBody from './components/Register/register';
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "Register",

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
        created () {
            this.handleView();
            window.console.log ('works');
            window.addEventListener("resize", this.handleView)
        },
        components: {
            mobileNav,
            HeaderName,
            RegisterBody,
            Foot

        }
    }
</script>

<style scoped>

</style>