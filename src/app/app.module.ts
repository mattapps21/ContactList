import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


var firebaseConfig = {
    apiKey: "AIzaSyCsDyduaKfP7K08geol-_UOKui97BKL7e4",
    authDomain: "firestore-4d895.firebaseapp.com",
    databaseURL: "https://firestore-4d895.firebaseio.com",
    projectId: "firestore-4d895",
    storageBucket: "",
    messagingSenderId: "315601693746"
}

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
