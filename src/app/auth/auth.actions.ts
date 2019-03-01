import { Action } from '@ngrx/store';
import { User } from '../interfaces/user';

export enum AuthActionTypes {
  LoginAction = '[LoginAction] Auths',
  LogoutAction = '[LogoutAction] Auths',    
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: User}) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
