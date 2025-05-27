import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { isAdminGuard, isGuestGuard, isNotAdminGuard } from './guards/auth.guard';
import { GameRegisterComponent } from './pages/game-register/game-register.component';
import { TeamFinderComponent } from './pages/team-finder/team-finder.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';

export const routes: Routes = [
    {path:'', component: LandingComponent, canActivate: [isNotAdminGuard]},
    {path:'login', component: LoginComponent, canActivate: [isGuestGuard, isNotAdminGuard]},
    {path:'register', component: RegisterComponent, canActivate: [isGuestGuard, isNotAdminGuard]},
    {path:'game-register', component: GameRegisterComponent, canActivate: [isNotAdminGuard]},
    {path:'team-finder', component: TeamFinderComponent, canActivate: [isNotAdminGuard]},
    {path:'panel-admin', component: PanelAdminComponent, canActivate: [isAdminGuard]}
];
