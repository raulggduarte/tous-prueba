<template>
    <div class="hero-slider" :v-if="this.mainHero">
        <router-link to="#">
            <div class="hero-product" :style="{ backgroundImage: `url(${bgImage})` }">
                <div class="hero-title">
                    <h1>{{ this.mainHero.name }}</h1>
                    <h5>{{ this.mainHero.description }}</h5>
                </div>
            </div>
            <div class="hero-text" v-show="!mobile">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corrupti labore nemo iure
                    inventore velit error? Harum obcaecati magni cum pariatur sint corporis. Explicabo pariatur eos cum
                    qui
                    laborum? Voluptas nam quae, voluptate enim tempore cumque ipsam magni mollitia voluptatem sapiente
                    quisquam expedita.</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeroSlider',
    props: {
        mobile: String
    },
    computed: {
        mainHero() {
            return this.$store.getters.mainHero;
        },
        bgImage() {
            return this.$store.getters.mainHero.image;
        }
    }
}

</script>

<style lang="scss" scoped>
.hero-slider {
    margin-bottom: 3rem;

    @media (min-width: 770px) {
        margin-bottom: 1rem;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;

        .hero-product {
            height: 300px;
            width: 100%;
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            @media (min-width: 770px) {
                justify-content: center;
            }
        }

        .hero-title {
            color: #fff;
            text-shadow: -1px 0 rgb(101, 101, 101), 0 1px rgb(101, 101, 101), 1px 0 rgb(101, 101, 101), 0 -1px rgb(101, 101, 101);
            margin-bottom: 2rem;

            @media (min-width: 770px) {
                margin-bottom: 0;
            }
        }

        .hero-text {
            font-size: 0.7rem;
            width: 70%;
            padding: 2rem;
        }
    }
}
</style>