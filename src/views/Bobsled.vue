<template>
<div class="page__container">
    <carousel class="story-carousel story-carousel--colors" :hideArrows="true">
        <slide class="story-carousel__slide">
            <img :src="images.bobsled1" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.bobsled2" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.bobsled3" class="images" />
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
                bobsled1: require('@/assets/bobsled1.jpg'),
                bobsled2: require('@/assets/bobsled2.jpg'),
                bobsled3: require('@/assets/bobsled3.jpg'),
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/_main.scss';
</style>
