
import './bootstrap';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

import{app} from './main-app';
import { pinia } from "./main-app"; // Import the Pinia store instance
import "./vue-component";
app.use(pinia);
app.mount('#app');
