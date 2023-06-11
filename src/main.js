// Importing the createApp function from Vue
import { createApp } from 'vue'
// Importing the App component from the App.vue file
import App from './App.vue'

// Creating the Vue app instance
const app = createApp(App)
// Mounting the app to the element with id 'app'
app.mount('#app')
