import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() postClicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }


  emitClick() {
    this.postClicked.emit(true);
  }
}
