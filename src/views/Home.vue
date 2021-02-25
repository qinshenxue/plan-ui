<template>
    <div class="home">
        <pre class="data">{{$data}}</pre>
        <div class="demo-item">
            <w-radio-group v-model="radio" size="mini" @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </div>
        <div class="demo-item">
            <w-radio-group v-model="radio" size="small" @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </div>

        <div class="demo-item">
            <w-radio-group v-model="radio" @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </div>

        <div class="demo-item">
            <w-radio-group v-model="radio" large @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </div>

        <div class="demo-item">
            <w-button size="mini">默认按钮</w-button>&emsp;
            <w-button size="small">默认按钮</w-button>&emsp;
            <w-button>默认按钮</w-button>&emsp;
            <w-button size="large">默认按钮</w-button>&emsp;
        </div>
        <div class="demo-item">
            <w-button round>默认按钮</w-button>&emsp;
            <w-button round type="primary">默认按钮</w-button>&emsp;
            <w-button type="primary">默认按钮</w-button>&emsp;
        </div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>
        <div class="demo-item"></div>

    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            radio: 'beijing',
            radioChangeArgs: [],
        }
    },
    methods: {
        handleChange(...args) {
            console.log('页面接受', this.radio)
            this.radioChangeArgs = args
        },
    },
}
</script>

<style lang="less">
.home {
    width: 800px;
    margin: 0 auto;
    .data {
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        padding: 30px;
        margin: 0;
        box-sizing: border-box;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: #f1f1f1;
    }
    .demo-item {
        padding: 10px;
    }
}
</style>
