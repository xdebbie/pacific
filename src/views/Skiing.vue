<template>
<div class="page-container">
    <img :src="images.skiing1" class="images">
    <img :src="images.skiing2" class="images">
    <img :src="images.skiing3" class="images">
</div>
</template>

<script>
export default {
    data() {
        return {
            images: {
                skiing1: require('@/assets/skiing1.jpg'),
                skiing2: require('@/assets/skiing2.jpg'),
                skiing3: require('@/assets/skiing3.jpg'),
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
