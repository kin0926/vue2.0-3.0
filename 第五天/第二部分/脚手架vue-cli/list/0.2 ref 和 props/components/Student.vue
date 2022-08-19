<template lang="">
    <div>
        <h3>学生姓名{{name}}</h3>
        <!-- 要想年龄可以增加  方法一：用*1进行强制类型转换，就可以+1了 -->
        <!--【v-bind方法】推荐 方法2：在App.vue的年龄前加个‘：’ -->
        <h3>学生年龄{{age+2}}</h3>
    </div>
</template>
<script>
export default {
    name:'student',
    data() {
        return {
            // 用下面的props
        }
    },
    // props【让组件接收外部传过来的数据】
    // App.vue的标签里面设定name和age的值，然后props在这边接收，再给html里
    // 接收到的内容不能修改{只读}，不然会报错
    // props:['name','age']     //1、简单接收

    // props:{                   //2、接收+限制（可以限制类型）
    //     name:String,
    //     age:Number,
    // }

    props:{                   //3、接收+限制+必要性的限制+默认值的指定
        name:{
            type:String,     //类型
            required:true,   //是否必填
        },
        age:{
            type:Number,
            default:32,    //App.vue那边不填时显示这个默认值，不会和required同时出现
        }
    }
}
</script>
<style lang="">
    
</style>