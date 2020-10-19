<template>
<div class="container">
    <VueSlickCarousel v-bind="settings">
        <img :src="images.skeleton" class="images">
        <img :src="images.skeleton" class="images">
        <img :src="images.skeleton" class="images">
    </VueSlickCarousel>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Carousel',
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            images: {
                skeleton: require('@/assets/skeleton1.jpg')
            },
            settings: {
                arrows: false,
                dots: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                dotsClass: "slick-dots custom-dot-class",
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }]
            },
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin: 80px auto;
    border: 2px solid black;

}

.images {
    width: 70%;
}
</style>
