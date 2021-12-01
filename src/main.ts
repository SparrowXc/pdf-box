import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';

import '@/styles/app.scss';
// tailwindcss
import '@/styles/tailwind.css';

async function bootstrap() {
  const app = createApp(App);

  // Configure routing
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
