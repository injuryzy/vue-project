<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAsid />
            </el-aside>
            <el-container>

                <el-header>
                    <common-header />
                </el-header>
                <el-container>
                    <el-main>

                        <router-view></router-view>
                    </el-main>
                    <!-- <el-footer>Footer</el-footer>  -->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import CommonAsid from '../components/CommonAsid.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
    data() {
        return {}
    },
    components: {
        CommonAsid,
        CommonHeader
    }
}
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
</style>
