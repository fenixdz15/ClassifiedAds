import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
// import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Logout } from '../auth/auth.actions';
import { isLoggedIn } from '../auth/auth.selectors';
import { AuthState } from '../auth/auth.reducer';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedIn: boolean;

  constructor(private auth: AuthService, private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.pipe(select(isLoggedIn))
      .subscribe(loggedIn => this.isloggedIn = loggedIn)    
  }

  logout() {
    this.auth.logOut().subscribe(() => {
      this.store.dispatch(new Logout());
    })
  }    

}
