import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Location } from '@angular/common';
import { Posts } from 'src/app/models/Posts.model';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Posts = {
    id: 0,
    title: '',
    body: ''
  };
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
      this.loading = false;
    });
  }
}
