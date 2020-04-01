import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostModalComponent,
    CreatePostComponent
  ],
  entryComponents: [CreatePostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
