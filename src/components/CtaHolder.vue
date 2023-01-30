<template>
    <div class="cta-container" :v-if="this.ctaHolderImg" :style="{ backgroundImage: `url(${ctaHolderImg})` }">
        <div class="cta-title">
            <h5>Lorem ipsum</h5>
            <h1>LOREM IPSUM</h1>
            <h6>Lorem ipsum</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui adipisci iste ad quae accusamus?
                Deleniti,
                iste omnis, autem nam unde molestias ipsam explicabo numquam illo odit, labore maiores atque?
            </p>
        </div>
        <div class="cta-buttons">
            <CtaButton msg="CTA 1" class="cta-button" />
            <CtaButton msg="CTA 2" class="cta-button" />
        </div>
        <div class="cta-video">
            <CtaVideo />
        </div>
        <div class="cta-text" v-show="mobile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui adipisci iste ad quae accusamus?
                Deleniti,
                iste omnis, autem nam unde molestias ipsam explicabo numquam illo odit, labore maiores atque?
            </p>
        </div>
    </div>
</template>

<script>
import CtaButton from '@/components/CtaButton.vue'
import CtaVideo from '@/components/CtaVideo.vue'

export default {
    name: 'CtaHolder',
    props: {
        mobile: String
    },
    components: {
        CtaButton,
        CtaVideo
    },
    computed: {
        ctaHolderImg() {
            return this.$store.getters.ctaHolderImg;
        },
    }
}
</script>

<style lang="scss" scoped>
.cta-container {
    margin: 0 2rem 2rem 2rem;
    background-size: cover;
    background-position: center;


    @media (max-width: 769px) {
        background-image: none !important;
    }

    @media (min-width: 770px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 15rem;
    }

    .cta-title {
        text-align: start;
        padding: 2rem 0;

        @media (min-width: 770px) {
            width: 450px;
            color: #fff;
            padding: 5rem 5rem 0 0;
        }

        h1 {
            padding: 1rem 0;
        }

        h6 {
            padding-bottom: 0.5rem;
        }
    }

    .cta-buttons {
        margin-bottom: 3rem;

        @media (min-width: 770px) {
            width: 450px;
            padding-right: 5rem;
        }

        .cta-button {
            border: 1px solid #000;
            margin: 0.6rem 0;
            padding: 0.9rem 0;
            cursor: pointer;
        }

        .cta-button:nth-child(even) {
            background-color: #fff;
            color: #000;
        }

        .cta-button:nth-child(odd) {
            background-color: #000;
            color: #fff;
        }
    }

    .cta-video {
        cursor: pointer;

        @media (min-width: 770px) {
            position: absolute;
            top: 750px;
            left: 10vw;
            width: 27vw;
            height: 50vw;
        }
    }

    .cta-text {
        text-align: start;
        padding: 2rem 0;
    }

}
</style>