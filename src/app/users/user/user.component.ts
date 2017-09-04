import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from './shared/user.model';
import { DataService } from '../../home/shared/data.service';

@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  public user: UserModel;
  private userId: string;
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params['id'];
    this.getDataUser(this.userId);
  }
  private getDataUser(id) {
    this.dataService.getData(`/users/${id}`).subscribe((result) => {
    this.user =  new UserModel(1, result.email, '', result.hash, result.date, result.name, result.isActive, id);
    console.log('2222', this.user);
    });
  }
}
