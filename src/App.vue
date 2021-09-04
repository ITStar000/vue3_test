<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="82px">
          <Side />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Side from "./components/Side/Side.vue";

export default {
  name: "App",
  components: {
    Header,
    Side
  }
};
</script>

<style scoped></style>
