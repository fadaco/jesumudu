<template>
   <div>
       <mobileNav/>
       <HeaderName v-if="!mobileView"/>
       <RegisterBody/>
   </div>

</template>

<script>
    import mobileNav from './components/Mobile-menu/mobile-menu';
    import HeaderName from './components/Shared/Header/header';
    import RegisterBody from './components/Register/register';
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
        components: {
            mobileNav,
            HeaderName,
            RegisterBody

        }
    }
</script>

<style scoped>

</style>