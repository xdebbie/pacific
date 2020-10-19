<template>
<div class="page__container">
    <carousel class="story-carousel story-carousel--colors" :hideArrows="true">
        <slide class="story-carousel__slide">
            <img :src="images.skiing1" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.skiing2" class="images" />
        </slide>
        <slide class="story-carousel__slide">
            <img :src="images.skiing3" class="images" />
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
                skiing1: require('@/assets/skiing1.jpg'),
                skiing2: require('@/assets/skiing2.jpg'),
                skiing3: require('@/assets/skiing3.jpg'),
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.page__container {
    margin: 2.5rem 0 0 0;
    padding: 0;
    width: 65%;

    .images {
        width: 100%;
        height: auto;
    }

    .story-carousel .story-carousel__slide {
        widows: 60%;
        color: #fff;
    }
}
</style>
