<template>
    <div class="novelties-list" :v-if="this.novelties">
        <div class="novelties-text">
            <h4>LOREM IPSUM</h4>
            <h1>#LOREM</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quam at quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit mollitia.</p>
        </div>
        <div class="novelties-grid">
            <div 
                class="novelty" 
                v-for="novelty in novelties" 
                :key="novelty.id"
                :id="'novelty' + novelty.id">
                <router-link 
                    :to="novelty.link"
                    :style="{ backgroundImage: `url(${novelty.image})` }">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoveltiesList',
    computed: {
        novelties() {
            return this.$store.getters.novelties;
        }
    }
}
</script>

<style lang="scss" scoped>
.novelties-list {

    margin-bottom: 3rem;
    .novelties-text {
        margin: 0 1.5rem 1.5rem 1.5rem;

        h1 {
            padding: 0.5rem 0;
        }

        p {
            padding: 0.5rem 0;
            font-size: 0.9rem;
        }
    }

    .novelties-grid {
        height: 300px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0.5rem;

        @media (min-width: 770px) {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(2, 1fr);

            #novelty0 {
                grid-column: 1 / 3;
                grid-row: 1 / 3;
            }

            #novelty1 {
                grid-column: 3 / 4;
                grid-row: 1 / 2;
            }

            #novelty2 {
                grid-column: 4 / 5;
                grid-row: 1 / 2;
            }

            #novelty3 {
                grid-column: 3 / 4;
                grid-row: 2 / 3;
            }

            #novelty4 {
                grid-column: 4 / 5;
                grid-row: 2 / 3;
            }

            #novelty5 {
                grid-column: 5 / 7;
                grid-row: 1 / 3;
            }
        }

        .novelty {
            width: 100%;
            height: 100%;

            a {
                display: block;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }
        }
    }
}
</style>