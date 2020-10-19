<template>
<div class="page-container">
    <img :src="images.snowboarding1" class="images">
    <img :src="images.snowboarding2" class="images">
    <img :src="images.snowboarding3" class="images">
</div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                snowboarding1: require('@/assets/snowboarding1.jpg'),
                snowboarding2: require('@/assets/snowboarding2.jpg'),
                snowboarding3: require('@/assets/snowboarding3.jpg'),
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.page-container {
    margin: 2.5rem 0 0 0;
    padding: 0;
    width: 70%;

    .images {
        width: 95%;
    }
}
</style>
