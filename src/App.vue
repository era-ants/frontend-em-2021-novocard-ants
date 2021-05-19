<template>
  <router-view>
  </router-view> 
</template>

<script>

export default {
  name: 'App',
  //  components: {
  //    MainOps,
  //  },
  mounted() {
    location.hash = "/info";
  }
};
</script>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge add Firefox */
  .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }
</style>