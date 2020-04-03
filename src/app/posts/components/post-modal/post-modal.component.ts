import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {

  @Input() post: IPost;

  constructor(
    private router: Router,
    public activeModal: NgbActiveModal
  ) { }

  navigateToUser() {
    this.activeModal.close();
    this.router.navigate(['/users', this.post.user.id]);
  }
}
