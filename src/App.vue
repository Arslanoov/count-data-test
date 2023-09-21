<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
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

h2 {
  font-size: 22px;
}
</style>
