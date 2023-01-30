<template>
    <div>
        <div class="hero-img" :style="{ backgroundImage: `url(${image})` }"></div>
        <div class="hero-text">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <router-link :to="link">LEER MÁS ></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HerosCard',
    props: {
        name: String,
        description: String,
        image: String,
        link: String
    }
}

</script>

<style lang="scss" scoped>
.hero-img {
    width: 200px;
    height: 200px;
}
</style>