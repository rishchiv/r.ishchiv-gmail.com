import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: [IUser];

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((res: any) => {
      this.users = res;
    })
  }

  detailInfo(user: IUser) {
    const modalRef = this.modalService.open(UserDetailsComponent);
    modalRef.componentInstance.user = user;
  }
}
