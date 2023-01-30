<template>
    <header class="nav-header">
        <router-link to="#" class="header-logo">
            <img src="@/assets/tous_logo.png" alt="logo-tous">
        </router-link>
        <div class="desktop-navBar" v-show="!mobile">
            <router-link to="#">SPECIAL PRICES</router-link>
            <router-link to="#">PERSONALIZACIÓN</router-link>
            <router-link to="#">PRODUCTOS</router-link>
            <router-link to="#">COLECCIONES</router-link>
            <router-link to="#">REGALOS</router-link>
            <router-link to="#">ABOUT US</router-link>
        </div>
        <div class="search-icon nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g fill="#3A3A3A" fill-rule="nonzero">
                    <path
                        d="M22.017 13c0-4.97-4.036-9.003-9.017-9.003-4.982 0-9.017 4.032-9.017 9.003 0 4.97 4.035 9.003 9.017 9.003 4.98 0 9.017-4.033 9.017-9.003zM23 13c0 5.524-4.48 10-10 10-5.522 0-10-4.475-10-10S7.478 3 13 3c5.52 0 10 4.475 10 10z">
                    </path>
                    <path
                        d="M20.139 19.814a.469.469 0 0 1 .015-.68.512.512 0 0 1 .705.014l6.002 6.038a.469.469 0 0 1-.015.68.512.512 0 0 1-.705-.014l-6.002-6.038z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="user-icon nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g fill="#3A3A3A" fill-rule="nonzero">
                    <path
                        d="M15 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 1a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM25 25v-3a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v3h20zm1 1H4v-4a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v4z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="cart-icon nav-icon">
            <svg width="31px" height="31px" viewBox="0 0 31 31" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path
                        d="M6.77702311,5.0374742 C6.76931595,5.18996727 6.76546997,5.34422738 6.76546997,5.5 L6.76546997,5.5 L6.765,6 L3.55555556,6 C3.04600634,6 2.61794212,6.38313579 2.56167182,6.88956847 L1.00611627,20.8895685 C1.00204188,20.926238 1,20.9631048 1,21 C1,21.5522847 1.44771525,22 2,22 L16,22 L16,23 L2,23 C0.8954305,23 0,22.1045695 0,21 C0,20.9262097 0.00408375455,20.8524759 0.0122325307,20.7791369 L1.56778809,6.77913695 C1.68032868,5.76627159 2.53645712,5 3.55555556,5 L6.779,5 L6.79148163,4.81009169 C6.99978011,2.09816851 8.46156278,0 11.26547,0 C14.0693772,0 15.5311598,2.09816851 15.7394583,4.81009169 L15.751,5 L14.75,5 L14.754187,5.05365967 C14.7579649,5.12707093 14.7607857,5.20100024 14.7626619,5.27540461 L14.76547,5.5 L14.765,6 L7.765,6 L7.76546997,5.5 C7.76546997,5.34937689 7.76919713,5.20048219 7.77675292,5.05365967 L7.779,5 L6.779,5 Z M15.76547,9.54638565 C15.76547,9.82195922 15.5420735,10.0453557 15.2664999,10.0453557 C14.9891608,10.0447843 14.76547,9.82063131 14.76547,9.54432156 L14.765,6 L15.765,6 L15.76547,5.5 C15.76547,5.34422738 15.761624,5.18996727 15.7539168,5.0374742 L15.751,5 L18.9753844,5 C19.9944828,5 20.8506113,5.76627159 20.9631519,6.77913695 L21.765,13.999 L20.759,13.999 L19.9692681,6.88956847 C19.9129978,6.38313579 19.4849336,6 18.9753844,6 L15.765,6 L15.76547,9.54638565 Z M7.765,6 L7.76546997,9.52368164 C7.76546997,9.79982402 7.54161234,10.0236816 7.26546997,10.0236816 C6.98932759,10.0236816 6.76546997,9.79982402 6.76546997,9.52368164 L6.765,6 L7.765,6 Z M11.26547,1 C9.00612327,1 7.96211768,2.66505672 7.79097076,4.83502298 L7.779,5 L14.75,5 L14.7399692,4.83502298 C14.5688223,2.66505672 13.5248167,1 11.26547,1 Z"
                        id="path-1"></path>
                </defs>
                <g id="01-Fragments-/-Icon-/-Bag-Wishlist-/-Wishlist-transparent-empty" stroke="none" stroke-width="1"
                    fill="none" fill-rule="evenodd">
                    <g id="01-Fragments-/-Icon-/-Bag" transform="translate(-0.000000, 5.000000)">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="Combined-Shape" fill-rule="nonzero"></g>
                        <g id="Group" mask="url(#mask-2)">
                            <g transform="translate(-93.000000, -105.000000)" id="colors/@c">
                                <rect id="Rectangle-Copy" fill="#3A3A3A" x="0" y="0" width="244" height="244">
                                </rect>
                            </g>
                        </g>
                    </g>
                    <g id="Group" transform="translate(18.000000, 21.000000)" fill="#000000" fill-rule="nonzero">
                        <g id="noun-bookmark-1051469">
                            <path
                                d="M6.40031999,9.92306087 C6.46152552,9.97384425 6.54714508,9.99928018 6.63285642,9.99928018 C6.68176971,9.99928018 6.74297524,9.98660668 6.79197157,9.96117052 C6.91438263,9.89762493 7,9.77062451 7,9.61809966 L7,0.762374647 C7,0.343093548 6.66956269,0 6.26569973,0 L0.734300271,0 C0.33045916,0 0,0.34307086 0,0.762374647 L0,9.61809966 C0,9.77053829 0.0734125448,9.8976204 0.208028434,9.96117052 C0.330439493,10.0247161 0.489471598,10.0119539 0.599675641,9.91038714 L3.49998907,7.36928958 L6.40031999,9.92306087 Z M3.34091763,6.84833281 L0.489554638,9.35131391 L0.489554638,0.762404141 C0.489554638,0.622639238 0.599673456,0.508317073 0.734284974,0.508317073 L6.26568443,0.508317073 C6.40030251,0.508317073 6.51041477,0.622646044 6.51041477,0.762404141 L6.51041477,9.35131391 L3.65905177,6.84833281 C3.56113997,6.7721135 3.4387311,6.7721135 3.34083022,6.84833281 L3.34091763,6.84833281 Z"
                                id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div @click="$emit('toggleMobileNav')" class="toggle-mobile-icon-closed nav-icon" v-show="mobile & !mobileNav">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path fill="#3A3A3A" fill-rule="evenodd"
                    d="M6.5 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 0 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1z">
                </path>
            </svg>
        </div>

        <transition name="mobile-navBar">
            <div class="mobile-navBar" v-show="mobileNav">
                <router-link to="#">SPECIAL PRICES</router-link>
                <router-link to="#">PERSONALIZACIÓN</router-link>
                <router-link to="#">PRODUCTOS</router-link>
                <router-link to="#">COLECCIONES</router-link>
                <router-link to="#">REGALOS</router-link>
                <router-link to="#">ABOUT US</router-link>
                <div @click="$emit('toggleMobileNav')" class="toggle-mobile-icon-open" v-show="mobile & mobileNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path fill="#3A3A3A" fill-rule="evenodd"
                            d="M6.5 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 0 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1z">
                        </path>
                    </svg>
                </div>
            </div>
        </transition>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
        }
    },
    props: {
        mobile: String,
        mobileNav: String,
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.nav-header {
    display: grid;
    padding: 0.8rem 1rem;
    grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
    align-items: center;
    justify-items: center;

    @media (min-width: 770px) {
        grid-template-columns: 3fr 24fr 1fr 1fr 1fr;
        grid-gap: 0.4rem;
    }

    .header-logo {
        order: 3;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 4.5rem;
        }

        @media (min-width: 770px) {
            order: 1;
        }
    }

    .nav-icon {
        &:hover {
            path {
                stroke: black;
                stroke-width: 1.5px;
            }
        }
    }

    .search-icon {
        order: 2;

        @media (min-width: 770px) {
            order: 3;
        }
    }

    .user-icon {
        order: 4;

        @media (min-width: 770px) {
            order: 4;
        }
    }

    .cart-icon {
        order: 5;
        padding-bottom: 0.3rem;
    }

    .nav-icon {
        cursor: pointer;
    }

    .toggle-mobile-icon-closed {
        order: 1;
    }

    .toggle-mobile-icon-open {
        width: auto;
        padding-bottom: 1rem;
    }

    .mobile-navBar {
        padding: 1.3rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 57%;
        background-color: #fff;
        top: 0;
        left: 0;

        a,
        div {
            width: 100%;
            padding: 15px 0;
            color: #000;
            font-weight: 500;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }

    .mobile-navBar-enter-active,
    .mobile-navBar-leave-active {
        transition: all 1s ease;
    }

    .mobile-navBar-enter {
        transform: translateX(-250px);
    }

    .mobile-navBar-enter-to {
        transform: translateX(0);
    }

    .mobile-navBar-leave-to {
        transform: translateX(-250px);
    }

    .desktop-navBar {
        order: 2;
        display: flex;

        a {
            font-size: 0.6rem;
            padding: 0.5rem;
            color: #000;
            font-weight: 800;

            &:hover {
                color: #fff;
                background-color: #000;
            }
        }
    }
}
</style>