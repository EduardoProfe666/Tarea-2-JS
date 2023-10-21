import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Test from './Test.vue';
import router from './router'

//const app = createApp(App)
const app = createApp(Test);

app.use(router)

app.mount('#app')
