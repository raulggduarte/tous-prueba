<template>
    <div v-on:click="playPause()">
        <video-background class="video-background" :src="require(`@/assets/cta-video.mp4`)"
            :poster="require(`@/assets/cta-video-pic.png`)" :autoplay=false style="max-height: 400px; height: 100vh;"
            overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" ref="videobackground">
            <img src="@/assets/play-triangle-outline.png"
            class="play-logo"
            style="cursor: pointer; color: black" 
            v-show="!play"/>
        </video-background>
    </div>
</template>

<script>
export default {
    name: 'CtaHolder',
    data() {
        return {
            play: false,
        }
    },
    methods: {
        playPause() {
            if (this.play === false) {
                this.$refs.videobackground.player.play();
                this.play = true;
            } else {
                this.$refs.videobackground.player.pause();
                this.play = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.videobg-content {
    display: flex;
    align-items: center;
    justify-content: center;

    .play-logo {
        position:relative;
        top: 10rem;
        height: 3rem;
        width: 3rem;
    }
}
</style>