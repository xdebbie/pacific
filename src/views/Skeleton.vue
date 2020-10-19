<template>
<div class="page-container">
    <img :src="images.skeleton1" class="images">
    <img :src="images.skeleton2" class="images">
    <img :src="images.skeleton3" class="images">
</div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                skeleton1: require('@/assets/skeleton1.jpg'),
                skeleton2: require('@/assets/skeleton2.jpg'),
                skeleton3: require('@/assets/skeleton3.jpg'),
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
