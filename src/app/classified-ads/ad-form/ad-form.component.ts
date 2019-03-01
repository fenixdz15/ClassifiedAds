import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; 

import { Store, select } from '@ngrx/store';
import { user } from '../../auth/auth.selectors';
import { AuthState } from 'src/app/auth/auth.reducer';

@Component({
  selector: 'ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  adForm: FormGroup;
  userId: string;
  selectedFile = null;

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private store: Store<AuthState>) { }

  ngOnInit() {
    this.adForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(10)]),
      userId: new FormControl('', Validators.required)
    })

    this.store.pipe(select(user))
      .subscribe(user => this.adForm.get('userId').setValue(user.id))    
  }

  clearFormControl(controlName) {
    this.adForm.get(controlName).reset();
  }

  saveAd() {
    this.afs.collection('ads').add(this.adForm.value).then(res => {
      console.log('rrr', res)
    })
    // let userDocRef = this.afs.collection('ads').doc(this.adForm.get('userId').value)
    // userDocRef.collection('userAds').add(this.adForm.value).then(res => {
    //   console.log('rrr', res)
    // })
  }

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }

}
