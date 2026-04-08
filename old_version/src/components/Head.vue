<template>
  <div class="head" :style="{'background': headC}">
    <div class="left" >
      <i class="icon el-icon-more" :style="{'color': icon}" @click="Menu(showMenu)"></i>
      <div class="logo"></div>
    </div>
    <div class="right">
      <el-switch
        class="switch"
        v-model="value"
        active-text="EN"
        inactive-text="CN"
        @change="changeS"
        >
      </el-switch>
    </div>
    <div class="Menu" v-if="showMenu">
      <ul>
        <li v-for="item in MenuList" :key="item.id" >{{$t(`common.${item.name}`)}}</li>
      </ul>
      <div class="Menu_icon">
        <div class="blue icon_box">f</div>
        <div class="red icon_box"><i class="el-icon-s-promotion"></i></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      value: true,
      showMenu: false,
      icon: '#fff',
      headC: 'hsl(221, 100%, 37%)',
      MenuList: [
        {name: 'HouseQuant', id: '1'},
        {name: 'StockQuant', id: '2'},
        {name: 'CollectibleQuant', id: '3'},
        {name: 'About', id: '4'},
      ],
      active: ''
    }
  },
  mounted () {
    console.log(this.$i18n.locale)
  },
  methods: {
    Menu(showMenu) {
      this.showMenu = !showMenu
      if (!showMenu) {
        this.icon = 'rgba(255, 255, 255, .5)',
        this.headC = '#000'
      } else {
        this.icon = '#fff',
        this.headC = 'hsl(221, 100%, 37%)'
      }
      console.log('Menu')
    },
    menuClick (name) {
      this.active = name
    },
    changeS(val) {
      if (val) {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'zh'
      }
    }
  }
}
</script>

<style  lang="less" scoped>
  .head { 
    width: 100%;
    height: .64rem;
    background: hsl(221, 100%, 37%);
    position: relative;
    // overflow: hidden;
    .left {
      position: relative;
      width: 50%;
      height: 100%;
      float: left;
      .icon {
        width: .64rem;
        height: .4rem;
        line-height: .64rem;
        // color: #FFFFFF;
        font-size: .18rem;
        position: absolute;
        left: 0;
      }
      .logo {
        width: 1.6rem;
        height: .4rem;
        // background: #FFFFFF;
        background: #FFFFFF url(../assets/step_origin.png) no-repeat center center;
        background-size: 90%;
        box-shadow: 0rem 0rem .16rem 0rem rgba(0, 0, 0, 0.1);
        border-radius: 2.12rem;
        position: absolute;
        left: .64rem;
        top: .12rem;

      }
    }
    .right {
      position: relative;
      width: 50%;
      height: 100%;
      line-height: 100%;
      float: right;
      overflow: hidden;
      .switch {
        position: absolute;
        width: .96rem!important;
        height: .32rem!important;
        right: .16rem;
        top: .16rem;
      }
      /deep/.el-switch__core {
        width: .96rem!important;
        height: .32rem!important;
        line-height: .32rem;
        border-radius: .16rem;
        background: transparent!important;
        border-color: transparent!important;
       
      }
      /deep/.el-switch__core:after {
        width: .32rem!important;
        height: .32rem!important;
        min-width: .32rem;
        top: -.01rem;
      }
      /deep/.el-switch.is-checked .el-switch__core::after {
        margin-left: -.32rem;
        top: -.01rem;
      }
      /deep/.el-switch__label--right {
        margin-left: -.27rem;
        z-index: 1;
        color: #ffffff;
        font-weight: 600;
        font-size: .14rem!important;
      }
      /deep/.el-switch__label--left {
        margin-right: -.27rem;
        z-index: 1;
        color: #ffffff;
        font-weight: 600;
        font-size: .14rem!important;
      }
      /deep/.el-switch__label.is-active {
        z-index: 11;
        color: #409EFF;
        font-weight: 600;
        font-size: .14rem!important;
      }
      /deep/.el-switch__label * {
        font-size: .14rem!important;
      }
    }
    .switchs /deep/.el-switch__core {
      background: #000!important;
      border-color: #000!important;
    }
    .Menu {
      position: absolute;
      float: left;
      top: .64rem;
      width: 100%;
      height: 7.04rem;
      background: #000000;
      z-index: 2;
      font-size: .48rem;
      font-family: ArialRoundedMTBold, "微软雅黑";
      color: #FFFFFF;
      line-height: .48rem;
      padding: .4rem .8rem;
      box-sizing: border-box;
      li{ 
        height: 1.12rem;
         list-style: none;
         text-align: left;
      }
      li:hover {
        color: rgba(255, 80, 30, 1)
      }
      // .active {
      //   color: rgba(255, 80, 30, 1)
      // }
      .Menu_icon {
        width: 3.2rem;
        height: 1.28rem;
        position: absolute;
        right: .8rem;
        bottom: .64rem;
        overflow: hidden;
        .icon_box {
          width: 1.28rem;
          height: 1.28rem;
          border-radius: 50%;
          line-height: 1.28rem;
          font-weight: 600;
          font-size: .48rem;
        }
        .blue {
          background: #003ABC;
          float: left;
          color: #fff;
          
        }
        .red {
          background: #FF501E;
          float: right;
         
        }
      }
    }
  }
</style>