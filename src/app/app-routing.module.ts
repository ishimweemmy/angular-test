import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouristInformationComponent } from './tourist-information/tourist-information.component';

const routes: Routes = [
    { path: '', component: TouristInformationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
