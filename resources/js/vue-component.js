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

const RoomsAdd = defineAsyncComponent(()=>
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

const HotelsAdd =  defineAsyncComponent(()=>
    import(/* webpackChunkName: "room-add" */ "./components/Hotels/Add.vue")
);



app.component('example-component',ExampleComponent);
app.component('welcome-component',WelcomeComponent);
app.component('rooms-lists',RoomsLists);
app.component('rooms-add',RoomsAdd);
app.component('room-types-lists',RoomTypesLists);
app.component('room-types-add',RoomTypesAdd);
app.component('room-types-show',RoomTypesShow);
app.component('room-types-edit',RoomTypesEdit);
app.component('hotels-add',HotelsAdd)
export default app;
