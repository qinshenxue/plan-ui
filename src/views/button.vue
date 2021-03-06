<template>
    <div class="">
        <h3>size="mini"</h3>
        <p>
            <w-button size="mini">默认按钮</w-button>
        </p>
        <h3>size="small"</h3>
        <p>
            <w-button size="small">默认按钮</w-button>
        </p>
        <h3>all default</h3>
        <p>
            <w-button>默认按钮</w-button>
        </p>
        <h3>size="large"</h3>
        <p>
            <w-button size="large">默认按钮</w-button>
        </p>
        <h3>round</h3>
        <p>
            <w-button round @click="handleButtonClick">默认按钮</w-button>
        </p>
        <h3>type="primary" round</h3>
        <p>
            <w-button round type="primary" @click="handleButtonClick">
                默认按钮
            </w-button>
        </p>
        <h3>type="primary"</h3>
        <p>
            <w-button type="primary" @click="handleButtonClick">默认按钮
            </w-button>
        </p>
        <h3>type="text"</h3>
        <p>
            <w-button type="text" @click="handleButtonClick">文字按钮
            </w-button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleButtonClick() {},
    },
}
</script>
