import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {path: 'home',
        component: HomeComponent
    },
    {path: 'login',
        component: LoginComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
