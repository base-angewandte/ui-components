<template>
  <svg
    :aria-labelledby="title || desc ? ariaAttribute : false"
    class="base-icon">
    <title
      v-if="title"
      :id="'title_' + id">{{ title }}</title>
    <desc
      v-if="desc"
      :id="'desc_' + id">{{ desc }}</desc>
    <use
      v-if="baseIcons"
      :href="icon" />
  </svg>
</template>

<script>

/**
 * A wrapper component for base icons
 */

export default {
  name: 'BaseIcon',
  props: {
    /**
     * define icon name
     */
    name: {
      type: String,
      default: null,
      validator(val) {
        return ['add-existing-collection', 'add-existing-object', 'add-new-collection', 'add-new-object', 'archive-arrow',
          'archive-empty', 'archive-sheets', 'arrow-left', 'arrow-right', 'attachment', 'attention', 'audio-object', 'calendar-many',
          'calendar-number', 'camera', 'check-mark', 'clock', 'collection', 'download', 'drag-lines', 'drag-n-drop',
          'drop-down', 'duplicate', 'edit', 'eye-hide', 'eye', 'file-object', 'forbidden', 'fullscreen', 'fullscreen-exit',
          'grid', 'home', 'image-object', 'image-cropped', 'image-resized', 'information', 'institution', 'information-solo',
          'licence', 'logo', 'magnifier', 'minus', 'next', 'options-menu', 'people', 'people-filled', 'play', 'plus', 'prev', 'print',
          'refresh', 'remove', 'save-file', 'separator-vertical', 'share', 'sort', 'subscribe', 'success', 'text', 'unsubscribe',
          'video-object', 'waste-bin'].includes(val);
      },
    },
    /**
     * define title tag
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * define description tag
     */
    desc: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // path to base-ui-icons.svg
      baseIcons: null,
    };
  },
  computed: {
    icon() {
      return `${this.baseIcons}#${this.name}`;
    },
    id() {
      // eslint-disable-next-line no-underscore-dangle
      return this._uid;
    },
    ariaAttribute() {
      const aria = [];
      if (this.title) {
        aria.push(`title_${this.id}`);
      }
      if (this.desc) {
        aria.push(`desc_${this.id}`);
      }
      return aria.join(' ');
    },
  },
  mounted() {
    // window.base_ui_icons could be adapted in parent frontend project
    if (window.base_ui_icons) {
      this.baseIcons = window.base_ui_icons;
      return;
    }
    this.baseIcons = '/base-ui-icons.svg';
  },
};
</script>

<style lang="scss" scoped>
  .base-icon {
    display: inline-block;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    max-height: 100%;
    max-width: 100%;
  }
</style>
