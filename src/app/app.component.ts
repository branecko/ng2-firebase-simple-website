import { Component,OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Business} from './interfaces/Business';
import {Category} from './interfaces/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  businesses:Business[];
  categories:Category[];
  appState: string;
  activeKey: string;

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key?){
    if(key){
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category){
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  addBusiness(company: string, category: string, city: string, email: string) {
    var created_at = new Date().toString();
    var newBusiness: Business = {
      company: company,
      category: category,
      city: city,
      email: email
    };

    this._firebaseService.addBusiness(newBusiness);

    this.changeState('default');
  }
}
