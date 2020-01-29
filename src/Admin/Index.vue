<template>
    <div id="mainAdminContent">
        <Sidebar class="sidebarMain"/>
        <div class="mainContent">
            <Header/>
        <router-view class="mainDiv"></router-view>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    import Header from "./Header";
    export default {
        name: "Index",
        components: {Sidebar, Header}
    }
</script>

<style scoped>

    #mainAdminContent {
        display: flex;
    }

    .mainContent {
        width: 80%;
    }

    .sidebarMain {
        width: 20%;
    }

    .mainDiv {
        background: #f5f5f5;
        padding: 20px;
        height: 100%;
    }

</style>