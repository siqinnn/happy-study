<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" target="_blank" >Home</router-link>|
      <router-link to="/about" target="_blank" >About</router-link>
      <div id="anniu">
        <button v-for="path of pathList" :key="path" @click="Route(path)" class="tiao"  target="_blank">{{path}}</button>
         <!-- <router-view></router-view> -->
      </div>    
      <div>
        <h3>Welcome to Your study App</h3>
      </div>
      <div class="tu">
        <img :src="imgs">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imgs: require("./assets/1.jpg"),
      pathList: ["活动配置管理", "活动素材增加", "活动素材编辑", "活动素材预览"]
    };
  },
  methods: {
    Route(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  button {
    width: 150px;
    margin:5px;
    background: darkorange;
  }
}
</style>
