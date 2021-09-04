<template>
  <div class="header">
    <el-row justify="space-between" align="center">
      <el-col :span="1">
        <el-avatar shape="square">
          <img src="../../assets/avatar/1.png" alt="hello"
        /></el-avatar>
      </el-col>
      <el-col :span="10">
        <el-input
          style="width: 600px"
          placeholder="WithVision / Product / Features / Document workflow / Untitled"
          prefix-icon="el-icon-search"
          suffix-icon="el-icon-close"
          v-model="input2"
        >
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-avatar>
          <img src="../../assets/avatar/2.png" alt="hello" />
        </el-avatar>
      </el-col>
    </el-row>
    <div class="headerLine"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.headerLine {
  margin-top: 6px;
  border-bottom: 1px #928b8b solid;
}
</style>
