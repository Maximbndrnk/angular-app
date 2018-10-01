import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { PostsResolver } from '../core/post/posts.resolver';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      posts: PostsResolver,
    }
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
