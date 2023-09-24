<template>
  <div class="links">
    <div class="link">
      <router-link to="/with-vuex">With vuex</router-link>
    </div>
    <div class="link">
      <router-link to="/without-vuex">Without vuex</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  font-size: 1.8rem;

  .link {
    margin-bottom: 1.5rem;
  }
}
</style>
