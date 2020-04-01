import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/posts.service';
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
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res: any) => {
      this.posts = res;
      console.log(res)
    });
  }

  open(post) {
    const modalRef = this.modalService.open(PostModalComponent);
    modalRef.componentInstance.post = post;
  }

  openCreatePost() {
    const modalRef = this.modalService.open(CreatePostComponent);
  }

}
