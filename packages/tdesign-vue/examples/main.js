/*
 * @Author       : djkloop
 * @Date         : 2020-08-15 21:39:28
 * @LastEditors  : djkloop
 * @LastEditTime : 2020-08-15 22:01:32
 * @Description  : 头部注释
 * @FilePath     : /form-create2/packages/element-ui/examples/main.js
 */
import {createApp,h, defineComponent} from 'vue'

import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

import FormCreate from '../src'
import App from './App.vue'
import App2 from './App2.vue'

const app = createApp(App2)

app.use(TDesign);
app.use(FormCreate)

//todo ------------------ Demo 用 ------------------

// import VJsoneditor from 'v-jsoneditor'
import addressEffect from './addressEffect';
import wangEditor from '@form-create/component-wangeditor/src'


// app.use(VJsoneditor)
FormCreate.register(addressEffect);
FormCreate.component('wangEditor', wangEditor);

//自定义组件
FormCreate.component('testSlot', defineComponent({
    render() {
        return h('div',{}, this.$slots.test());
    }
}))

//todo ------------------ Demo 用 ------------------

app.mount('#app')
