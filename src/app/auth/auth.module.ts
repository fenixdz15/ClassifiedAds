import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    LoginComponent,
    AngularFontAwesomeModule
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: AuthModule,
          providers: [
            AuthService,
            AuthGuard
          ]
      }
  }
}
