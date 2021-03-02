<template>
    <div class="home">
        <pre class="data">{{$data}}</pre>
        <div class="demo">
            <row>
                <h2>radio group</h2>
                <cell>
                    <w-radio-group v-model="radio" size="mini"
                                   @change="handleChange">
                        <w-radio-button value="beijing">北京</w-radio-button>
                        <w-radio-button value="shanghai">上海</w-radio-button>
                        <w-radio-button value="guangzhou">广州</w-radio-button>
                    </w-radio-group>
                </cell>
                <cell>
                    <w-radio-group v-model="radio" large @change="handleChange">
                        <w-radio-button value="beijing">北京</w-radio-button>
                        <w-radio-button value="shanghai">上海</w-radio-button>
                        <w-radio-button value="guangzhou">广州</w-radio-button>
                    </w-radio-group>
                </cell>

            </row>
            <row>
                <h2>button</h2>
                <cell>
                    <w-button size="mini">默认按钮</w-button>
                </cell>
                <cell>
                    <w-button size="small">默认按钮</w-button>
                </cell>
                <cell>
                    <w-button>默认按钮</w-button>
                </cell>
                <cell>
                    <w-button size="large">默认按钮</w-button>
                </cell>
                <cell>
                    <w-button round @click="handleButtonClick">默认按钮</w-button>
                </cell>
                <cell>
                    <w-button round type="primary" @click="handleButtonClick">
                        默认按钮
                    </w-button>
                </cell>
                <cell>
                    <w-button type="primary" @click="handleButtonClick">默认按钮
                    </w-button>
                </cell>
                <cell>
                    <w-button type="text" @click="handleButtonClick">文字按钮
                    </w-button>
                </cell>
            </row>
            <row>
                <h2>input</h2>
                <div>
                    <w-input size="mini"></w-input>
                </div>
                <br>
                <div>
                    <w-input size="large">
                        <i slot="prefix">p</i>
                        <i slot="suffix">s</i>
                    </w-input>
                </div>

            </row>
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
            <row>
                <h2>progress</h2>
                <row>
                    <w-progress :value="50"></w-progress>
                </row>
                <row>
                    <w-progress :strokeWidth="10" :value="50"></w-progress>
                </row>
                <row>
                    <w-progress :strokeWidth="10" :value="50" showText>
                    </w-progress>
                </row>
                <row>
                    <cell>
                        <w-progress type="circle" :value="progressValue">
                        </w-progress>
                    </cell>
                    <cell>
                        <w-progress type="circle" :strokeWidth="10" showText
                                    :value="progressValue">
                        </w-progress>
                    </cell>
                    <cell>
                        <w-progress type="circle" :strokeWidth="10" showText
                                    :gradient="['#FF2900','#FFAA26']"
                                    :value="progressValue">
                        </w-progress>
                    </cell>
                </row>
                <w-button @click="progressValue+=10">progressValue++</w-button>
                &emsp;
                <w-button @click="progressValue-=10">progressValue--</w-button>
            </row>
            <row>
                <h2>message</h2>
                <row>
                    <cell>
                        <w-button type="primary"
                                  @click="$message.success('成功消息')">
                            成功消息</w-button>
                    </cell>
                    <cell>
                        <w-button type="primary"
                                  @click="$message.error('错误消息')">
                            错误消息</w-button>
                    </cell>
                </row>
            </row>
            <row>
                <h2>dialog</h2>
                <row :key="key1">
                    <cell>
                        <w-button type="primary"
                                  @click="dialogVisible=!dialogVisible">
                            对话框</w-button>

                    </cell>
                    <cell>
                        <w-button type="primary" @click="++key1">
                            测试重新渲染</w-button>
                    </cell>
                    <w-dialog title="对话框第1层（最外层）" :visible.sync="dialogVisible">
                        <w-button @click="dialogVisible1=true">对话框第1层（最外层）
                        </w-button>
                        <w-button type="primary"
                                  @click="$message.error('错误消息对话框第1层（最外层）')">
                            错误消息</w-button>
                    </w-dialog>
                    <w-dialog title="对话框第2层" :visible.sync="dialogVisible1">
                        <w-button @click="dialogVisible2=true">对话框第2层</w-button>
                        <w-button type="primary"
                                  @click="$message.error('对话框第2层')">
                            错误消息</w-button>
                    </w-dialog>
                    <w-dialog title="对话框第3层" :visible.sync="dialogVisible2">
                        对话框第3层
                        <w-button type="primary"
                                  @click="$message.error('对话框第3层')">
                            错误消息</w-button>
                    </w-dialog>
                    <cell>
                    </cell>
                </row>
            </row>
            <row></row>

        </div>
    </div>
</template>

<script>
export default {
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
                    label:
                        '广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州',
                },
                {
                    value: 'shanghai',
                    label: '上海',
                },
            ],
            progressValue: 50,
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            key1: 0,
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
body {
    margin: 0;
}
.home {
    display: flex;
    min-height: 100vh;
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
        white-space: pre-wrap;
        font-size: 13px;
    }
    .demo {
        padding: 30px;
        flex: 1;
    }
}
</style>
