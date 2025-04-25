import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { isGuestGuard, isUserAuthenticatedGuard } from './guards/auth.guard';
import { GameRegisterComponent } from './pages/game-register/game-register.component';
import { TeamFinderComponent } from './pages/team-finder/team-finder.component';

export const routes: Routes = [
    {path:'', component: LandingComponent},
    {path:'login', component: LoginComponent, canActivate: [isGuestGuard]},
    {path:'register', component: RegisterComponent, canActivate: [isGuestGuard]},
    {path:'game-register', component: GameRegisterComponent},
    {path:'team-finder', component: TeamFinderComponent}
];
