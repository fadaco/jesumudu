<template>
   <div>
       <HeaderName/>
       <Foot/>
   </div>

</template>

<script>
    import HeaderName from './components/Shared/Header/header';
    import Foot from './components/Shared/Footer/footer';
    export default {
        name: "Register",
        components: {
            HeaderName,
            Foot
        }
    }
</script>

<style scoped>

</style>