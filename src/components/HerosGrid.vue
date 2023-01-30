<template>
    <div class="heros-grid" :v-if="this.otherHeros">
        <div class="heros-grid-text">
            <h4>LOREM IPSUM</h4>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio facilis veniam.</p>
            <router-link to="#">CTA 3 ></router-link>
        </div>
        <div class="heros-grid-carousel">
            <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="hero in otherHeros" :key="hero.id">
                    <div>
                        <div class="hero-img" :style="{ backgroundImage: `url(${hero.image})` }"></div>
                        <div class="hero-text">
                            <h1>{{ hero.name }}</h1>
                            <p>{{ hero.description }}</p>
                            <router-link :to="hero.link">LEER MÁS ></router-link>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation />

                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'HerosGrid',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            settings: {
                itemsToShow: 1.1,
                snapAlign: 'center',
            },
            breakpoints: {
                770: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
            }
        }
    },
    computed: {
        otherHeros() {
            return this.$store.getters.otherHeros;
        }
    }
}
</script>

<style lang="scss" scoped>
.heros-grid {
    background-color: rgb(204, 204, 204);
    padding: 2rem 1rem 0 1rem;
    margin-bottom: 6rem;

    .heros-grid-text {
        margin-bottom: 3rem;

        h1 {
            padding: 0.5rem 0;
        }

        p {
            padding: 1rem;
            font-size: 0.8rem;
        }

        a {
            padding: 1rem;
            font-size: 1rem;
            font-weight: 600;
        }
    }

    .heros-grid-carousel {

        .carousel__slide {

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .hero-img {
                    width: 95%;
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                }

                .hero-text {
                    h1 {
                        padding: 1.5rem;
                        text-transform: uppercase;
                    }

                    p{
                        padding: 0 2rem;
                        font-size: 0.8rem;
                    }

                    a{
                        padding: 3rem 0;
                    }
                }
            }
        }
    }
}
</style>