import { defineAsyncComponent } from 'vue';
import{app} from "./main-app";

const ExampleComponent = defineAsyncComponent(()=>
    import(/* webpackChunkName: "example-component" */ "./components/ExampleComponent.vue")
);

const WelcomeComponent = defineAsyncComponent(()=>
    import(/* webpackChunkName: "welcome-component" */ "./components/WelcomeComponent.vue")
);

const RoomsLists = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-lists" */ "./components/Rooms/Lists.vue")
);

const RoomAdd = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Rooms/Add.vue")
);

const RoomTypesLists = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Types/Lists.vue")
);

const RoomTypesAdd = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Types/Add.vue")
);

const RoomTypesShow = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Types/Show.vue")
);

const RoomTypesEdit = defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Types/Edit.vue")
);


app.component('example-component',ExampleComponent);
app.component('welcome-component',WelcomeComponent);
app.component('rooms-lists',RoomsLists);
app.component('room-add',RoomAdd);
app.component('room-types-lists',RoomTypesLists);
app.component('room-types-add',RoomTypesAdd);
app.component('room-types-show',RoomTypesShow);
app.component('room-types-edit',RoomTypesEdit);
export default app;
