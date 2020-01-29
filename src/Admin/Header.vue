<template>
    <div id="mainHeader">
        <div></div>
        <div class="leftSide">ADMIN</div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #mainHeader {
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 20px;
    }

    .leftSide {
        background: #1C115C;
        border-radius: 50%;
        padding: 23px 7px;
         color: #ffffff;
    }

</style>