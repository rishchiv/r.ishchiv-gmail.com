import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';

import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: IUser[];
  private destroy = new Subject<any>();
  private modalRef = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private userService: UserService,
    public deviceService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    })
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      const { id } = params;
      if (id) {
        this.userService.getUserById(params.id).subscribe(res => {
          this.detailInfo(res);
          this.modalRef.result.then(() => {
            this.router.navigateByUrl('/users');
          }, () => {
            this.router.navigateByUrl('/users');
          });
        })
      }
    });
  }

  detailInfo(user: IUser) {
    this.modalRef = this.modalService.open(UserDetailsComponent);
    this.modalRef.componentInstance.user = user;
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
