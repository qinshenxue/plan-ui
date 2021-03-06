<template>
    <div class="">
        <h3>mini</h3>
        <p>
            <w-radio-group v-model="radio1" size="mini" @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </p>
        <h3>large</h3>
        <p>
            <w-radio-group v-model="radio2" large @change="handleChange">
                <w-radio-button value="beijing">北京</w-radio-button>
                <w-radio-button value="shanghai">上海</w-radio-button>
                <w-radio-button value="guangzhou">广州</w-radio-button>
            </w-radio-group>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio1: '',
            radio2: 'beijing',
        }
    },
    methods: {
        handleChange() {},
    },
}
</script>
