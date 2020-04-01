import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostModalComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
})
export class PostsModule { }
