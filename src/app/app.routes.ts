import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';

import { CoursesComponent } from './components/courses/courses.component';

import { CourseDetailsComponent } from './components/course-details/course-details.component';


export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },

    {path:'courses',component:CoursesComponent}

    { path: 'course-details/:id', component: CourseDetailsComponent }

];
