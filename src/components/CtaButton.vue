<template>
    <div>
        <router-link to="/#">{{ msg }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'CtaButton',
    props: {
        msg: String
    }
}
</script>

<style lang="scss" scoped>
a {
    font-weight: 600;
    width: 100%;
    height: 100%;
}
</style>