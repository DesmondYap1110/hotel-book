import { defineAsyncComponent } from 'vue';
import{app} from "./main-app";

const ExampleComponent = defineAsyncComponent(()=>
    import(/* webpackChunkName: "example-component" */ "./components/ExampleComponent.vue")
);

const WelcomeComponent = defineAsyncComponent(()=>
    import(/* webpackChunkName: "welcome-component" */ "./components/WelcomeComponent.vue")
);

app.component('ExampleComponent',ExampleComponent);
app.component('WelcomeComponent',WelcomeComponent);

export default app;
