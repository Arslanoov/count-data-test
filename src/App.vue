<template>
  <AppMenu />
</template>

<script>
import AppMenu from './components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    AppMenu,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>
