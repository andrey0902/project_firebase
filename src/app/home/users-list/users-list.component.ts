import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { SearchStateService } from '../../shared/search-state/search-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.scss']
})

export class UsersListComponent implements OnInit, OnDestroy {


  public listUsers: any;
  private isSubscribe: Subscription;
  constructor(private dataService: DataService,
              private searchStateService: SearchStateService) {
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
      this.isSubscribe = this.searchStateService.state.subscribe((data) => {
        console.log(data, 'search1111------');
      });
  }
  public   ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }
}
