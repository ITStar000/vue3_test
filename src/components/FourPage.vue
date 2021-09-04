<template>
  <div class="four">
    <div class="label">
      <img src="../assets/avatar/16.png" alt="1" />
      <div class="labelTitle">
        DocumentA
      </div>
    </div>
    <div class="samplePage">
      <el-card>
        <sample-page></sample-page>
      </el-card>
    </div>
    <div class="samplePage1">
      <el-card>
        <sample-page-1></sample-page-1>
      </el-card>
    </div>
    <div class="samplePage2">
      <el-card>
        <sample-page-2></sample-page-2>
      </el-card>
    </div>
  </div>
</template>
<script>
import SamplePage from "./SamplePage/SamplePage.vue";
import SamplePage1 from "./SamplePage/SamplePage1.vue";
import SamplePage2 from "./SamplePage/SamplePage2.vue";
export default {
  components: { SamplePage2, SamplePage1, SamplePage }
};
</script>
<style scoped>
.four {
  position: relative;
  width: 90%;
  height: 800px;
}
.samplePage {
  position: absolute;
  left: -20px;
  border-left: 1px #c2bfbf solid;
  padding-left: 100px;
}
.samplePage1 {
  position: absolute;
  left: 20px;
  padding-left: 20px;
  top: -22px;
}
.samplePage2 {
  position: absolute;
  left: 500px;
  top: -22px;
}
.label {
  width: 30px;
  height: 200px;
  position: absolute;
  left: 0px;
  top: 30px;
}
.labelTitle {
  margin-top: 100px;
  font-weight: bold;
  font-size: 16px;

  text-align: right;
  color: #000000;
  transform: rotate(-90deg);
}
</style>
