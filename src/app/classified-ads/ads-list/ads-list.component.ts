import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Ad } from '../../interfaces/ad';
import { Observable } from 'rxjs';

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  ads: AngularFirestoreCollection<Ad>;
  ads$: Observable<Ad[]>

  constructor(
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.ads = this.afs.collection<Ad>('ads');
    this.ads$ = this.ads.valueChanges();
  }
}
