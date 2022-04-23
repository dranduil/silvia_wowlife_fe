import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import './assets/index.css'
// vue app
const app = createApp(App);

// bootstrap
import "bootstrap"

// vue select
import { VueSelect } from 'vue-select'
import "vue-select/dist/vue-select.css";

app.component('v-select', VueSelect)

// clipboard
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})

//Store
app.use(store)


// template custom css
import './assets/scss/bundles.scss'
import './assets/scss/style.scss'

// Global page components imported
// import HeaderMain from './components/common/HeaderMain.vue';

// Global page components register
// app.component('HeaderMain', HeaderMain);

// vue app
app.use(router).mount('#app')
