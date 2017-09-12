import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss']
})

export class UsersListComponent implements OnInit{
  public listUsers: any;

  constructor(private dataService: DataService,
              ) {
  }

  public ngOnInit() {
    /*    this.dataService.setData([
          {
            name: 'Steve',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Diana',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Mil',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Steve',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Diana',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Mil',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Steve',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Diana',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Mil',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Steve',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Diana',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          },
          {
            name: 'Mil',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtHH4PtXM7GRlWoKRVUU5ngBB7WYKazDAIxNKVk0V7HW2WS7N'
          }], 'ios', 'activeUsers');*/
    this.dataService.getData('/ios/activeUsers').subscribe((result) => {
      this.listUsers = result;
    });

  }

}
