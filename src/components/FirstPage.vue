<template>
  <div>
    <el-row justify="space-between">
      <el-col :span="3"></el-col>
      <el-col :span="10">
        <p style="color:#666880">
          Jane Doe • Apr 13, 2021 • 15:59
        </p>
        <h2>
          <strong style="color:#666880; ">
            Untitled
          </strong>
        </h2>
        <p style="color:#666880;">
          Start writing, drag files, or choose a
          <span style="color:#4B00EA">template</span>
        </p>
      </el-col>
      <el-col :span="5">
        <div>
          <el-row justify="space-between">
            <el-avatar>
              <img src="../assets/avatar/7.png" alt="1" />
            </el-avatar>

            <img src="../assets/avatar/8.png" alt="1" />

            <img src="../assets/avatar/9.png" alt="1" />

            <el-avatar>
              <img src="../assets/avatar/10.png" alt="1" />
            </el-avatar>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FirstPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
