import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "headless-shopify.imgix.net",
    defaultIxParams: {
        auto: 'format,compress'
    },
});