import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { AdsListComponent } from './ads-list/ads-list.component';
import { AdComponent } from './ad/ad.component';
import { AdFormComponent } from './ad-form/ad-form.component';

export const adsRoutes: Routes = [
  {
    path: "",
    component: AdsListComponent
  },
  {
      path: "naujas-skelbimas",
      component: AdFormComponent
  },
];

@NgModule({
  declarations: [AdsListComponent, AdComponent, AdFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adsRoutes),

    MatButtonModule, 
    MatInputModule, 
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class ClassifiedAdsModule { }
