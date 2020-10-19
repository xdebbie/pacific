<template>
<div class="page__container">
    <carousel class="story-carousel story-carousel--colors" :hideArrows="true">
        <slide class="story-carousel__slide">
            <img :src="images.snowboarding1" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.snowboarding2" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.snowboarding3" class="images" />
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
                snowboarding1: require('@/assets/snowboarding1.jpg'),
                snowboarding2: require('@/assets/snowboarding2.jpg'),
                snowboarding3: require('@/assets/snowboarding3.jpg'),
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_main.scss';
</style>
