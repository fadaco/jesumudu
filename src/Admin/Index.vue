<template>
    <div>
        <Sidebar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    export default {
        name: "Index",
        components: {Sidebar}
    }
</script>

<style scoped>

</style>