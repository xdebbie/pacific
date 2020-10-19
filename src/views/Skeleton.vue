<template>
<div class="page__container">
    <carousel class="story-carousel story-carousel--colors" :hideArrows="true">
        <slide class="story-carousel__slide">
            <img :src="images.skeleton1" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.skeleton2" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.skeleton3" class="images" />
        </slide>
    </carousel>
</div>
</template>

<script>
import {
    Carousel,
    Slide
} from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            images: {
                skeleton1: require('@/assets/skeleton1.jpg'),
                skeleton2: require('@/assets/skeleton2.jpg'),
                skeleton3: require('@/assets/skeleton3.jpg'),
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_main.scss';
</style>
