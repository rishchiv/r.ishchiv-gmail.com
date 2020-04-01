import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  @Input() post: IPost;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
