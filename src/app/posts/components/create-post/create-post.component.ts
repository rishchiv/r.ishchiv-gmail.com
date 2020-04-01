import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  createPost() {
    // this.postService.createPost().subscribe(res => {

    // })
  }

}
