<template>
    <div>
        <div class="rounded-t-lg bg-grey pt-2 pb-2">
            <ix-img :src="imageSrc()"
                class="crop mx-auto"
                width="380"
                height="380"
                :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', trim:'auto'}"
                loading="lazy"
                fixed
            />
        </div>
        <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
            <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                {{product.title}}
            </h4>
            <div class="mt-1 text-sm text-gray-700">{{product.description}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'productWidget',
        props: {
            product: {
                type: Object,
                default: null
            },
            imgixParams: {
            type: String,
            default: null
            }
        },
        methods: {
            imageSrc() {
                return this.product.images[0].src.slice(57, -13)
            }
        }
    }
</script>
