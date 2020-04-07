import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Posts } from 'src/app/models/Posts.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Posts> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Posts> = new EventEmitter();

  @Input() currentPost: Posts;
  @Input() isEdit: boolean;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    console.log(this.currentPost);
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add post title and body details.');
    } else {
      this.postsService.addPost({ title, body } as Posts).subscribe(post => {
        this.newPost.emit(post);
      });
      this.currentPost = {
        id: 0,
        title: '',
        body: ''
      };
    }
  }

  updatePost(post: Posts) {
    this.postsService.updatePost(post).subscribe(post => {
      this.updatedPost.emit(post);
    });
  }

}
