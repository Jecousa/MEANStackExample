import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent} from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import {Auth_Routes} from "./auth/auth.routes";

const App_Routes: Routes = [
  { path:'', redirectTo: '/messages', pathMatch: 'full'},
  { path:'messages', component: MessagesComponent},
  { path:'auth', component: AuthenticationComponent, children: Auth_Routes}
];

export const routing = RouterModule.forRoot(App_Routes);
