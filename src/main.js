import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from '@/router'
import store from '@/store'
// import * as solanaWeb3 from '@solana/web3.js';
console.log(solanaWeb3);

createApp(App).use(router).use(store).mount('body')
