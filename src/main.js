import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
// import * as solanaWeb3 from '@solana/web3.js'
import router from '@/router'
import store from '@/store'

createApp(App).use(router).use(store).mount('body')
