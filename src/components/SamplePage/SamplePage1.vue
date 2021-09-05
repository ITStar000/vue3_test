<template>
  <div class="sample1">
    <el-row justify="space-between">
      <el-col :span="8">
        <p style="color: #666880">
          Justin Case • Apr 13, 2021 • 15:59
        </p>
      </el-col>
      <el-col :span="10">
        <div>
          <el-row>
            <el-col :span="12">
              <div>
                <el-row justify="space-between">
                  <div>
                    <el-row justify="center">
                      <el-avatar>
                        <img src="../../assets/avatar/11.png" alt="1" />
                      </el-avatar>
                      <el-avatar>
                        <img src="../../assets/avatar/12.png" alt="1" />
                      </el-avatar>

                      <el-avatar>
                        <img src="../../assets/avatar/14.png" alt="1" />
                      </el-avatar>
                    </el-row>
                  </div>
                </el-row>
              </div>
            </el-col>
            <el-col :span="4">
              <img src="../../assets/avatar/15.png" alt="1" />
            </el-col>
            <el-col :span="4">
              <el-avatar>
                <img src="../../assets/avatar/10.png" alt="1" />
              </el-avatar>
            </el-col>
            <el-col :span="4">
              <img src="../../assets/avatar/16.png" alt="1" />
            </el-col>

            <!-- <el-avatar>
            <img src="../../assets/avatar/10.png" alt="1" />
          </el-avatar> -->
            <!-- <el-col :span="4"> </el-col> -->
          </el-row>
        </div>
      </el-col>
    </el-row>
    <h2>
      <strong>
        Other document
      </strong>
    </h2>
    <p>
      Kevin tail leberkas biltong cupim meatloaf hamburger prosciutto cow
      frankfurter porchetta strip steak venison jerky swine.
    </p>

    <p>
      Chislic bresaola chicken cow hamburger pork loin short ribs leberkas
      turkey jerky ham hock chuck corned beef. Capicola chuck beef beef ribs.
    </p>
    <p>
<<<<<<< HEAD
      <span style="color:#4B00EA;cursor: pointer" @click="fourPage"
        ><strong>Meatball bacon hamburger </strong></span
      >
      ball tip, leberkas cupim landjaeger pork chop porchetta.
=======
      Meatball bacon hamburger ball tip, leberkas cupim landjaeger pork chop
      porchetta.
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
    </p>
    <p>
      Bacon cow alcatra rump, tenderloin biltong jerky shoulder kielbasa swine
      venison filet mignon porchetta picanha meatloaf.
    </p>
    <p>
      Does your lorem ipsum text long for something a little meatier? Give our
      generator a try… it’s tasty!
    </p>
    <div style="margin-top: 50px">
      <p>DISCUSSION</p>
      <el-row>
        <el-col :span="2">
          <el-avatar>
            <img src="../../assets/avatar/2.png" alt="1" />
          </el-avatar>
        </el-col>
        <el-col :span="22">
          <el-input placeholder="Leave a comment" v-model="input2"> </el-input>
        </el-col>
      </el-row>
      <div className="divide"></div>
    </div>
    <div style="margin-top: 20px">
      <el-row align="center">
        <el-col :span="2">
          <el-avatar>
            <img src="../../assets/avatar/13.png" alt="1" />
          </el-avatar>
        </el-col>
        <el-col :span="20">
          <h2 style="margin-top: 1px">Justin Case</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sum
          </p>
        </el-col>
        <el-col :span="2">
          <el-avatar>
            <img src="../../assets/avatar/10.png" alt="1" />
          </el-avatar>
        </el-col>
      </el-row>
    </div>
    <div class="secBottom">
      <p style="margin-left: 10px">LIKE HERE</p>
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
<<<<<<< HEAD
export default {
  methods: {
    fourPage() {
      this.$router.push("/four");
    }
  }
};
=======
export default {};
>>>>>>> 9f6f41a0b273e164bb8757c69220c3c0817d1234
</script>
<style scoped>
.sample1 {
  height: 800px;
  width: 700px;
  padding: 20px;
}
.divide {
  margin: 4px;
  border-bottom: 1px solid #c4c2c2;
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
