import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PostsService } from '../../services/posts.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
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

  public invalidFormField(field: string) {
    return this.postForm.get(field).invalid &&
      (this.postForm.get(field).dirty || this.postForm.get(field).touched);
  }
}
