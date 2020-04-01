import { pick } from 'lodash';
import { forkJoin } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PostsService } from '../../services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts = [];

  constructor(
    private modalService: NgbModal,
    private postService: PostsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    forkJoin(
      this.userService.getAll(),
      this.postService.getPosts(),
    ).subscribe((res: any) => {
      const [users, posts] = res;

      this.posts = posts.map(post => {
        const user = users.find(user => user.id === post.userId);
        return {
          user,
          ...pick(post, ['id', 'title', 'body']),
        };
      });
    });
  }

  openDetails(post) {
    const modalRef = this.modalService.open(PostModalComponent);
    modalRef.componentInstance.post = post;
  }

  openCreatePost() {
    const modalRef = this.modalService.open(CreatePostComponent);
  }

}
