import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;
  public user: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.firstObsSub = interval(10000).subscribe((count) => {
      this.http
        .get('https://randomuser.me/api/')
        .subscribe((res: any) => {
          this.user = res.results[0];
        });
    });
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }
}
