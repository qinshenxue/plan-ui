<template>
    <div class="">
        <p>
            <w-progress :value="50"></w-progress>
        </p>
        <h3>strokeWidth="10"</h3>
        <p>
            <w-progress :strokeWidth="10" :value="50"></w-progress>
        </p>
        <h3>showText</h3>
        <p>
            <w-progress :strokeWidth="10" :value="50" showText>
            </w-progress>
        </p>
        <p>
            <w-progress type="circle" :value="progressValue">
            </w-progress>
        </p>
        <p>
            <w-progress type="circle" :strokeWidth="10" showText
                        :value="progressValue">
            </w-progress>
        </p>
        <h3>
            :gradient="['#FF2900','#FFAA26']"
        </h3>
        <p>
            <w-progress type="circle" :strokeWidth="10" showText
                        :gradient="['#FF2900','#FFAA26']"
                        :value="progressValue">
            </w-progress>
        </p>
        <p>
            <w-button @click="progressValue+=10">progressValue++</w-button>
            &emsp;
            <w-button @click="progressValue-=10">progressValue--</w-button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progressValue: 50,
        }
    },
    methods: {},
}
</script>
