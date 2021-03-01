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
                    <w-input size="large">
                        <i slot="prefix">p</i>
                        <i slot="suffix">s</i>
                    </w-input>
                </div>

            </div>
            <row>
                <h2>select</h2>
                <cell>
                    <w-select style="width:200px" v-model="selectValue">
                        <w-select-option v-for="option in selectOptions"
                                         :key="option.value"
                                         :value="option.value"
                                         :label="option.label">
                        </w-select-option>
                    </w-select>
                </cell>
                多选
                <cell>
                    <w-select style="width:200px" multiple
                              v-model="selectValues">
                        <w-select-option v-for="option in selectOptions"
                                         :key="option.value"
                                         :value="option.value"
                                         :label="option.label">
                        </w-select-option>
                    </w-select>
                </cell>
                <cell>
                    <w-select style="width:200px" multiple plain
                              placeholder="请选择" v-model="selectValues">
                        <w-select-option v-for="option in selectOptions"
                                         :key="option.value"
                                         :value="option.value"
                                         :label="option.label">
                        </w-select-option>
                    </w-select>
                </cell>
                <row>
                    <w-button @click="handleChangeOptions">改变options
                    </w-button>
                </row>
            </row>
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
    components: {
        row: {
            render(h) {
                return h(
                    'div',
                    {
                        class: ['row', {}],
                    },
                    [this.$slots.default]
                )
            },
        },
        cell: {
            render(h) {
                return h(
                    'div',
                    {
                        class: ['cell', {}],
                    },
                    [this.$slots.default]
                )
            },
        },
    },
    data() {
        return {
            radio: 'beijing',
            radioChangeArgs: [],
            buttonClickArgs: null,
            selectValue: 'beijing',
            selectValues: [],
            selectOptions: [
                {
                    value: 'beijing',
                    label: '北京',
                },
                {
                    value: 'guangzhou',
                    label: '广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州',
                },
                {
                    value: 'shanghai',
                    label: '上海',
                },
            ],
        }
    },
    methods: {
        handleChangeOptions() {
            this.selectOptions = [
                {
                    value: 'wuhan',
                    label: '武汉',
                },
                {
                    value: 'nanjing',
                    label: '南京',
                },
                {
                    value: 'shenzhen',
                    label: '深圳',
                },
            ]
        },
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
    width: 100vw;
    display: flex;
    .row {
        padding: 10px 0;
    }
    .cell {
        display: inline-flex;
        padding: 5px;
    }
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
