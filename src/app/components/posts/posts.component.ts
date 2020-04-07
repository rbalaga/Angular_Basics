import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/models/Posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  currentPost: Posts = {
    id: 0,
    title: '',
    body: ''
  };
  loading: boolean;
  isEdit: boolean = false;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.postsService.getPosts().subscribe((fetchdPosts: Posts[]) => {
      this.posts = fetchdPosts;
      this.loading = false;
    });
  }

  addNewPost(post: Posts): void {
    this.posts.unshift(post);
  }

  handleEdit(post: Posts): void {
    this.currentPost = post;
    this.isEdit = true;
  }

  handleDelete(postId: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postsService.deletePost(postId).subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== postId);
      });
    }
  }

  onUpdatedPost(post: Posts): void {
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
    this.isEdit =  false;
  }
}
