import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService) { }
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
  ngOnInit(): void {
  }

}
