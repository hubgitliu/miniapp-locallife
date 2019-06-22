<template>
    <div>
        <button open-type="openSetting">打开授权</button>
        <button @click="getUserLocation">获取定位信息</button>
    </div>
</template>

<script>
export default {
    methods: {
        getUserLocation(){
        wx.getLocation({
        success:res => {
          console.log(res)
        },
        fail:err=>{
            console.log(err,'111')
        }
      })
    }
    },
}
</script>
