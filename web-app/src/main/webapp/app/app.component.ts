import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile.component';
import { SigninComponent} from "./signin.component";
import { MessagesComponent} from "./messages.component";

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES, SigninComponent]	
})
@RouteConfig([
  { path: '/',      name: 'Main',       component: MainComponent, useAsDefault: true },
  { path: '/:id',   name: 'Profile',    component: ProfileComponent },
  { path: '/messages',   name: 'Messages',    component: MessagesComponent }
  
])
export class AppComponent {

 }
