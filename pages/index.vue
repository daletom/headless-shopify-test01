<template>
  <div>
    <div class="m-6 grid grid-cols-1 2col:grid-cols-2 3col:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
        <productWidget :product="product"></productWidget>
      </div>
    </div>
    <ul class="mt-4 text-center">Shopify JSON response
      <li v-for="product in products" :key="product.id">
        {{product.images[0].src}}
      </li>
    </ul>
  </div>
</template>

<script>
import ProductWidget from '~/components/ProductWidget.vue'
export default {
  name: "IndexPage",
  components: {
    ProductWidget
  },
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  }
}
</script>
