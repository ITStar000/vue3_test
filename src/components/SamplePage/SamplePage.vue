<template>
  <div class="sampage">
    <p style="color:#666880">
      Jane Doe • Apr 13, 2021 • 15:59
    </p>
    <h2>
      <strong>
        Document A
      </strong>
    </h2>
    <p>
<<<<<<< HEAD
      Chislic filet mignon bresaola doner meatball.<span
        style="color:#4B00EA;cursor: pointer"
        @click="threePage"
        ><strong>Other Document</strong>
      </span>
      rump pork jerky prosciutto flank pancetta chislic turkey chuck.
=======
      Chislic filet mignon bresaola doner meatball. Other document rump pork
      jerky prosciutto flank pancetta chislic turkey chuck.
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
    </p>
    <p>
      Tail tongue t-bone bresaola filet mignon ribeye meatball flank bacon
      kielbasa sausage ground round picanha prosciutto #Tag #Othertag
    </p>
    <p>
      Tri-tip leberkas brisket frankfurter tail kielbasa strip steak venison.
      Salami porchetta turducken t-bone capicola tongue meatball. Short ribs
      sirloin landjaeger pancetta drumstick leberkas prosciutto cupim
      frankfurter.
    </p>
    <p>
      Kevin tail leberkas biltong cupim meatloaf hamburger prosciutto cow
      frankfurter porchetta strip steak venison jerky swine. Chislic bresaola
      chicken cow hamburger pork loin short ribs leberkas turkey jerky ham hock
      chuck corned beef.
    </p>
    <div class="secBottom">
      <!-- <el-icon>
        <chat-line-square />
      </el-icon> -->
      <el-icon :size="size" :color="color">
        <edit />
      </el-icon>

      <span>START DISCUSSION</span>
      <p>LIKE HERE</p>
      <el-row>
        <div class="bottomContent">
          <h2>Link to this document</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sum.</p>
        </div>
        <div class="bottomContent">
          <h2>Link to this document</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sum.</p>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
import { Edit } from "@element-plus/icons";

export default {
<<<<<<< HEAD
  components: { Edit },
  methods: {
    threePage() {
      this.$router.push("/three");
    }
  }
=======
  components: { Edit }
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
};
</script>
<style scoped>
.sampage {
  position: relative;
  height: 800px;
  width: 700px;
}
.secBottom {
  position: absolute;
  width: 700px;
  height: 200px;
  bottom: 2px;
}
.bottomContent {
  background-color: #f8f7fd;
  width: 330px;
  height: 130px;
  border-radius: 10px;
  padding: 10px;
  color: #666880;
}
</style>
