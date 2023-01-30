<template>
    <div class="top-banner">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'TopBanner',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.top-banner {
  background-color: #000;
  color: #fff;
  font-size: 0.4rem;
  padding: 0.4rem;
}
</style>