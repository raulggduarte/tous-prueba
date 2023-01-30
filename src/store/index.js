import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    productImages: [],
    mainHeroImg: '',
    ctaHolderImg: '',
    noveltiesImgs: [],
    otherHerosImgs: [],
    mainHero: {},
    otherHeros: [],
    novelties: []
  },
  getters: {
    mainHero(state) {
      return state.mainHero;
    },
    ctaHolderImg(state) {
      return state.ctaHolderImg;
    },
    novelties(state) {
      return state.novelties;
    },
    otherHeros(state) {
      return state.otherHeros;
    },
  },
  mutations: {
    SAVE_IMAGES(state, productImages) {
      state.productImages = productImages.filter((url) => /\.(jpe?g|png|webp)$/.test(url));
      // console.log(state.productImages);
    },
    SET_MAIN_HERO_IMG(state) {
      state.mainHeroImg = state.productImages.slice(0, 1);
      state.mainHeroImg = 'https://random.dog/' + state.mainHeroImg;
      // console.log(state.mainHeroImg);
    },
    SET_CTA_HOLDER_IMG(state) {
      state.ctaHolderImg = state.productImages.slice(1, 2);
      state.ctaHolderImg = 'https://random.dog/' + state.ctaHolderImg
      // console.log(state.ctaHolderImg);
    },
    SET_NOVELTIES_IMGS(state) {
      state.noveltiesImgs = state.productImages.slice(2, 8);
      state.noveltiesImgs = state.noveltiesImgs.map(image => {
        image = 'https://random.dog/' + image;
        return image;
      })
      // console.log(state.noveltiesImgs);
    },
    SET_OTHER_HEROS_IMGS(state) {
      state.otherHerosImgs = state.productImages.slice(8, 11);
      state.otherHerosImgs = state.otherHerosImgs.map(image => {
        image = 'https://random.dog/' + image;
        return image;
      })
      // console.log(state.otherHerosImgs);
    },
    SET_MAIN_HERO(state) {
      state.mainHero = {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet',
        link: '#',
        image: state.mainHeroImg,
      }
      // console.log(state.mainHero);
    },
    SET_NOVELTIES(state) {
      let id = 0;
      state.noveltiesImgs.map(noveltieImg => {
        state.novelties.push({
          id: id,
          link: '#',
          image: noveltieImg
        })
        id += 1;
      });
      console.log(state.novelties);
    },
    SET_OTHER_HEROS(state) {
      let id = 0;
      state.otherHerosImgs.map(otherHeroImg => {
        state.otherHeros.push({
          id: id,
          name: `Lorem ${id + 1}`,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio facilis veniam aliquid blanditiis tempora earum.',
          link: '#',
          image: otherHeroImg
        })
        id += 1;
      });

      // console.log(state.otherHeros);
    },
  },
  actions: {
    loadImages({ commit }) {
      axios.get('https://random.dog/doggos').then(response => {
        commit('SAVE_IMAGES', response.data);
        this.dispatch('setImages');
        this.dispatch('fillHerosAndNovelties');
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    setImages({ commit, state }) {
      commit('SET_MAIN_HERO_IMG', state.productImages);
      commit('SET_CTA_HOLDER_IMG', state.productImages);
      commit('SET_NOVELTIES_IMGS', state.productImages);
      commit('SET_OTHER_HEROS_IMGS', state.productImages);
    },
    fillHerosAndNovelties({ commit, state }) {
      commit('SET_MAIN_HERO', state.productImages);
      commit('SET_NOVELTIES', state.productImages);
      commit('SET_OTHER_HEROS', state.productImages);
    }
  },
  modules: {
  },
})
