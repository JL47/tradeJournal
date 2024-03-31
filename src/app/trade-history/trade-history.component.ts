import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})
export class TradeHistoryComponent implements OnInit {
  private _trainUrl = "https://raw.githubusercontent.com/datameet/railways/master/trains.json";
  items: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this._trainUrl).subscribe(res => {
        this.items = res;
        console.log(this.items);
    })
  }

}
