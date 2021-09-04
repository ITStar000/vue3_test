<template>
  <div class="three">
    <div class="samplePage">
      <sample-page></sample-page>
    </div>
    <div class="samplePage1">
      <el-card>
        <sample-page-1></sample-page-1>
      </el-card>
    </div>
  </div>
</template>
<script>
import SamplePage from "./SamplePage/SamplePage.vue";
import SamplePage1 from "./SamplePage/SamplePage1.vue";
export default {
  components: { SamplePage, SamplePage1 }
};
</script>
<style scoped>
.three {
  position: relative;
  width: 90%;
  height: 800px;
}
.samplePage {
  position: absolute;
  left: 0;
  border-left: 1px #858484 solid;
  padding-left: 20px;
}
.samplePage1 {
  position: absolute;
  left: 500px;
  top: -22px;
}
</style>
