<template>
    <div class="contanier">
        <van-button type="primary" @click="down">导出提交信息</van-button>
    </div>
</template>

<script>
import {exportExecl} from '../../api/api'
export default {
    props: {

    },
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        down(){
            exportExecl().then().catch()
        }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
};
</script>

<style scoped lang="css">
.contanier{
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
