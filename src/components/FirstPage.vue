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
<<<<<<< HEAD
          <span style="color:#4B00EA; cursor: pointer" @click="secondPage"
            >template</span
          >
=======
          <span style="color:#4B00EA">template</span>
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
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
<<<<<<< HEAD
  name: "FirstPage",
  methods: {
    secondPage() {
      this.$router.push("/second");
    }
  }
=======
  name: "FirstPage"
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
