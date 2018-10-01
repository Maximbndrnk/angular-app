import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostService } from './post.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsResolver implements Resolve<any> {
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.postService.getPosts();
  }

}
