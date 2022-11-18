<template>
    <div>

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo el-menu" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
            <h3>{{ isCollapse ? "后台" : "后台管理系统" }}</h3>
            <el-menu-item v-on:click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>

            <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                    <el-menu-item v-on:click="clickMenu(subItem)" :index="subItem.name" slot="title">{{ subItem.label }}
                    </el-menu-item>
                </el-menu-item-group>

            </el-submenu>

        </el-menu>
    </div>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>

<script>
export default {
    data() {
        return {
            menuData: [
                {
                    path: '/',
                    home: "home",
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                }, {
                    path: '/mall',
                    home: "mall",
                    label: '商城管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                }, {
                    path: '/user',
                    home: "home",
                    label: '用户管理',
                    icon: 'user',
                    url: 'userManage/userManage'
                }, {

                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            home: "page1",
                            label: '页面1',
                            icon: 'setting',
                            url: 'userManage/userManage'
                        },
                        {
                            path: '/page2',
                            home: "page2",
                            label: '页面2',
                            icon: 'setting',
                            url: 'userManage/userManage'
                        }]
                },

            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {

            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {

            console.log(key, keyPath);
        },
        clickMenu(item) {
            if ((this.$route.path !== item.path) && !(this.$route.path === '/home' && (item.path === '/'))) {

                this.$router.push(item.path)
            }
        }
    },
    computed: {
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }

    }
}
</script>

<style lang="less" scoped>
.el-menu {
    border-right: none;
}
</style>