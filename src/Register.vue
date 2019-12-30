<template>
   <div>
       <HeaderName/>
       <RegisterBody/>
       <Foot/>
   </div>

</template>

<script>
    import HeaderName from './components/Shared/Header/header';
    import RegisterBody from './components/Register/register';
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "Register",
        components: {
            HeaderName,
            RegisterBody,
            Foot
        }
    }
</script>

<style scoped>

</style>