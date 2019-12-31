<template>
    <div>user bio data list
    <div v-for="(user, index) in userBioData" :key="index">
        {{user.address}}
    </div>
    </div>
</template>

<script>
    export default {
        name: "UserBioDataList",
        mounted() {
                this.$store.dispatch('loadUserBioData');
        },
        computed: {
            userBioData(){
                return this.$store.state.userData
            }
        }
    }
</script>

<style scoped>

</style>