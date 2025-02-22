<template>
  <div
    :class="['base-image-grid',
             'base-image-grid--' + imagesInt.length]">
    <div
      v-for="(image, index) in imagesInt"
      :key="'image' + index"
      class="base-image-grid__item">
      <BaseImage
        :lazyload="true"
        :src="src(image)"
        :srcset="srcset(image)" />
    </div>
  </div>
</template>

<script>
import BaseImage from '@/components/BaseImage/BaseImage';

/**
 * Base Component to render 1 to 4 images in a static grid
 */
export default {
  name: 'BaseImageGrid',
  components: {
    BaseImage,
  },
  props: {
    /**
     * specify alt text (used for each image)
     */
    alt: {
      type: String,
      default: '',
    },
    /**
     * specify lazy image loading
     */
    lazyload: {
      type: Boolean,
      default: true,
    },
    /**
     * specify images to display in a grid
     *
     * array variants to render a single image using `src` or `srcset` for a responsive image:
     * **src**: `['path']`
     * **srcset**: `[{ '640w': 'path' }]`
     */
    images: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    /**
     * Reduce images array to the first 4 images
     * @returns {*[]}
     */
    imagesInt() {
      return this.images.slice(0, 4);
    },
  },
  methods: {
    /**
     * get single src
     *
     * @param {string|object} data
     * @returns {string}
     */
    src(data) {
      return typeof data === 'string'
        ? data
        // get last array elements path
        : Object.entries(data).slice(-1)[0][1];
    },
    /**
     * get srcset
     *
     * @param {object} data
     * @returns {array}
     */
    srcset(data) {
      return typeof data === 'object' ? [data] : [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

$baseImageGrid: base-image-grid;
.#{$baseImageGrid} {
  display: grid;
  grid-gap: 3px;
  height: 100%;
  width: 100%;

  &__item {
    overflow: hidden;
    background-color: $background-color;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  // 1 image
  &--1 {
    grid-template-rows: 1fr;
  }

  // 2 images
  &--2 {
    grid-template-rows: 1fr 1fr;
  }

  // 3 images
  &--3 {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    .#{$baseImageGrid}__item {
      &:nth-of-type(3) {
        grid-column: 1 / span 2;
      }
    }
  }

  // 4 images
  &--4 {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
