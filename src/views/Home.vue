<template>
    <div class="home">
        <pre class="data">{{$data}}</pre>
        <div class="demo">
            <div class="demo-item">
                <w-radio-group v-model="radio" size="mini"
                               @change="handleChange">
                    <w-radio-button value="beijing">北京</w-radio-button>
                    <w-radio-button value="shanghai">上海</w-radio-button>
                    <w-radio-button value="guangzhou">广州</w-radio-button>
                </w-radio-group>
            </div>
            <div class="demo-item">
                <w-radio-group v-model="radio" size="small"
                               @change="handleChange">
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
                <w-button round @click="handleButtonClick">默认按钮</w-button>&emsp;
                <w-button round type="primary" @click="handleButtonClick">默认按钮
                </w-button>&emsp;
                <w-button type="primary" @click="handleButtonClick">默认按钮
                </w-button>
                &emsp;
                <w-button type="text" @click="handleButtonClick">文字按钮</w-button>
                &emsp;
            </div>
            <div class="demo-item">
                <h2>select</h2>
                <div>
                    <w-input size="mini"></w-input>
                </div>
                <br>
                <div>
                    <w-input size="small"></w-input>
                </div>
                <br>
                <div>
                    <w-input></w-input>
                </div>
                <br>
                <div>
                    <w-input size="large"></w-input>
                </div>

            </div>
            <div class="demo-item">
                <h2>select</h2>
                <w-select style="width:200px" v-model="selectValue">
                    <w-select-option value="beijing">北京</w-select-option>
                    <w-select-option value="shanghai">上海</w-select-option>
                    <w-select-option value="guangzhou">广州</w-select-option>
                </w-select>
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
        </div>
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
            buttonClickArgs: null,
            selectValue: 'beijing',
        }
    },
    methods: {
        handleChange(...args) {
            console.log('页面接受', this.radio)
            this.radioChangeArgs = args
        },
        handleButtonClick(e) {
            this.buttonClickArgs = e.pageX
        },
    },
}
</script>

<style lang="less">
.home {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    .data {
        width: 25vw;
        padding: 30px;
        margin: 0;
        box-sizing: border-box;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: #f1f1f1;
    }
    .demo {
        padding: 30px;
        flex: 1;
    }
    .demo-item {
        padding: 10px;
    }
}
</style>
