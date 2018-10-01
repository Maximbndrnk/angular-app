import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../core/post/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts = [];
  globalPosts = [];
  comments = [];

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit() {
    this.globalPosts = this.route.snapshot.data['posts'];
    this.posts = this.globalPosts.slice(0, 20);
  }

  getComments(id: string) {
    this.postService.getComments(id).subscribe(resp => {
      let r: any = resp;
      this.comments = r || [];
    });
  }

  setPage(i: number) {
    this.posts = this.globalPosts.slice((i * 20), (20 * (i + 1)));
    this.comments = [];
  }
}
