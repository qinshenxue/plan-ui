<template>
    <component class="w-svg-icon1" :is="name">
    </component>
</template>

<script>
import arrowDown from './arrow-down'
export default {
    props: {
        name: String,
    },
    components: {
        arrowDown,
    },
}
</script>
