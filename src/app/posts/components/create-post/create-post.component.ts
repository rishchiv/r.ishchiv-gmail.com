import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../../services/posts.service';
import { FormService } from 'src/app/services/form.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public postForm: FormGroup;

  constructor(
    public formService: FormService,
    private toastService: ToastService,
    private postService: PostsService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.postForm = this.formService.createForm({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  createPost() {
    const post = {
      userId: 1,
      ...this.postForm.value,
    };
    this.postService.createPost(post).subscribe(() => {
      this.showSuccessToast();
      this.activeModal.close();
    }, err => {
      this.showErrorToast(err);
      this.activeModal.close();
    })
  }

  private showSuccessToast() {
    this.toastService.show('Post successfully created', {
      classname: 'bg-success text-light',
      delay: 1000,
    });
  }

  private showErrorToast(err) {
    this.toastService.show(`Error on post creation ${err.toString}`, {
      classname: 'bg-danger text-light',
      delay: 1000,
    });
  }
}
