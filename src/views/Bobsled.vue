<template>
<div class="page-container">
    <img :src="images.bobsled1" class="images">
    <img :src="images.bobsled2" class="images">
    <img :src="images.bobsled3" class="images">
</div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                bobsled1: require('@/assets/bobsled1.jpg'),
                bobsled2: require('@/assets/bobsled2.jpg'),
                bobsled3: require('@/assets/bobsled3.jpg'),
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
