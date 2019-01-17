<template>
  <div class="page-datetime">
    <div class="page-datetime-wrapper">
      <mt-button @click.native="open('picker2')" size="large">请选择出发日期</mt-button>  
    </div>
    <!--
    <mt-datetime-picker
      ref="picker1"
      v-model="startDate"
      :closeOnClickModal="false"
      @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </mt-datetime-picker>-->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="startDate"
      @confirm="handleChange">
    </mt-datetime-picker>
   <!-- <mt-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>-->
  </div>
</template>

<style>
  @component-namespace page {
    @component datetime {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:not:(last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        startDate:new Date(),
        value:""
       /*value: "",
       value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false*/
      };
    },

    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
          var time=value.toLocaleDateString()
          this.value=time
          this.$emit("value", this.value) 
          console.log(value.toLocaleDateString())
       Toast({
          message: '已选择 ' + value.toLocaleDateString(),
          position: 'bottom',
          duration:0
        });
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>
<style>
.page-datetime{
    margin-top:85px;
}
</style>
