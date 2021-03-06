<template>
    <div class="">
        <h3>size="mini"</h3>
        <p>
            <w-input size="mini"></w-input>
        </p>
        <h3>slot="prefix" slot="suffix"</h3>
        <p>
            <w-input size="large">
                <i slot="prefix">p</i>
                <i slot="suffix">s</i>
            </w-input>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>
