<template>
  <div class="second">
    <el-row justify="space-between">
      <el-col :span="3"></el-col>
      <el-col :span="14">
        <!-- <p style="color:#666880">
          Jane Doe • Apr 13, 2021 • 15:59
        </p>
        <h2>
          <strong>
            Document A
          </strong>
        </h2>
        <p>
          Chislic filet mignon bresaola doner meatball. Other document rump pork
          jerky prosciutto flank pancetta chislic turkey chuck.
        </p>
        <p>
          Tail tongue t-bone bresaola filet mignon ribeye meatball flank bacon
          kielbasa sausage ground round picanha prosciutto #Tag #Othertag
        </p>
        <p>
          Tri-tip leberkas brisket frankfurter tail kielbasa strip steak
          venison. Salami porchetta turducken t-bone capicola tongue meatball.
          Short ribs sirloin landjaeger pancetta drumstick leberkas prosciutto
          cupim frankfurter.
        </p>
        <p>
          Kevin tail leberkas biltong cupim meatloaf hamburger prosciutto cow
          frankfurter porchetta strip steak venison jerky swine. Chislic
          bresaola chicken cow hamburger pork loin short ribs leberkas turkey
          jerky ham hock chuck corned beef.
        </p> -->
        <sample-page></sample-page>
      </el-col>
      <el-col :span="7">
        <div>
          <el-row justify="space-between">
            <div>
              <el-row justify="center">
                <el-avatar>
                  <img src="../assets/avatar/11.png" alt="1" />
                </el-avatar>
                <el-avatar>
                  <img src="../assets/avatar/12.png" alt="1" />
                </el-avatar>
                <el-avatar>
                  <img src="../assets/avatar/13.png" alt="1" />
                </el-avatar>
                <el-avatar>
                  <img src="../assets/avatar/14.png" alt="1" />
                </el-avatar>
              </el-row>
            </div>

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
import SamplePage from "./SamplePage/SamplePage.vue";
export default {
  components: { SamplePage },
  name: "FirstPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
