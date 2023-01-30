<template>
  <div class="home">
    <TopBanner msg="ENVÍO ESTANDAR GRATIS EN TODAS LAS COMPRAS DE 100 € O MÁS" v-show="!mobile" />
    <TopBanner msg="ENVÍO ESTANDAR GRATIS A PARTIR DE 100 €" v-show="mobile" />
    <NavBar :mobile="mobile" :mobile-nav="mobileNav" @toggleMobileNav="toggleMobileNav"/>
    <HeroSlider :mobile="mobile"/>
    <CtaHolder :mobile="mobile"/>
    <NoveltiesList />
    <HerosGrid />
  </div>
</template>

<script>
// @ is an alias to /src
import TopBanner from '@/components/TopBanner.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import CtaHolder from '@/components/CtaHolder.vue'
import NoveltiesList from '@/components/NoveltiesList.vue'
import HerosGrid from '@/components/HerosGrid.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    TopBanner,
    HeroSlider,
    CtaHolder,
    NoveltiesList,
    HerosGrid,
    NavBar
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    }
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.$store.dispatch('loadImages');
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  }
}
</script>

<style>

</style>
