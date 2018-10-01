import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostComponent, PostCommentComponent],
  exports: [
    PostComponent, PostCommentComponent
  ]
})
export class SharedModule {
}
