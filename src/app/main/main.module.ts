import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { PostsResolver } from '../core/post/posts.resolver';
import { PostService } from '../core/post/post.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: [PostsResolver, PostService],
  declarations: [MainComponent]
})
export class MainModule {

}
