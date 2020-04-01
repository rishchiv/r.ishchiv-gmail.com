import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../../services/posts.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public postForm: FormGroup;

  constructor(
    public formService: FormService,
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
    // this.postService.createPost().subscribe(res => {

    // })
  }

}
