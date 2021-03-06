<template>
    <div class="">
        <p>
            <w-button type="primary" @click="dialogVisible1=!dialogVisible1">
                对话框</w-button>
        </p>
        <p>
            <w-button type="primary" @click="++key">
                测试重新渲染</w-button>
        </p>
        <p :key="key">
            <w-dialog title="对话框第1层（最外层）" :visible.sync="dialogVisible1">
                <w-button @click="dialogVisible2=true">对话框第1层（最外层）
                </w-button>
                <w-button type="primary"
                          @click="$message.error('错误消息对话框第1层（最外层）')">
                    错误消息</w-button>
            </w-dialog>
            <w-dialog title="对话框第2层" :visible.sync="dialogVisible2">
                <w-button @click="dialogVisible3=true">对话框第2层</w-button>
                <w-button type="primary" @click="$message.error('对话框第2层')">
                    错误消息</w-button>
            </w-dialog>
            <w-dialog title="对话框第3层" :visible.sync="dialogVisible3">
                对话框第3层
                <w-button type="primary" @click="$message.error('对话框第3层')">
                    错误消息</w-button>
                <br>
                <w-select multiple style="width:200px" placeholder="请选择"
                          v-model="selectValues">
                    <w-select-option v-for="option in 100" :key="option"
                                     :value="option" :label="option+''">
                    </w-select-option>
                </w-select>
            </w-dialog>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            key: 1,
            dialogVisible1: false,
            dialogVisible2: false,
            dialogVisible3: false,
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
        }
    },
    methods: {},
}
</script>
