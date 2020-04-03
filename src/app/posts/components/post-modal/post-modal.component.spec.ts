import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModalComponent } from './post-modal.component';

describe('PostModalComponent', () => {
  let component: PostModalComponent;
  let fixture: ComponentFixture<PostModalComponent>;

  const expectedPost = {
    id: 1,
    title: 'test',
    body: 'test',
    user: {
      id: 1,
      name: 'test',
      username: 'test',
      email: 'test@test.com',
      company: {
        name: 'test'
      },
      address: {
        street: 'test',
        suite: 'test',
        city: 'test',
      },
      phone: 'string'
    }
  };

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostModalComponent],
      providers: [{ provide: Router, useValue: router }, NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModalComponent);
    component = fixture.componentInstance;
    component.post = expectedPost;
    fixture.detectChanges();
  });

  it('should click link', () => {
    let component: PostModalComponent = fixture.componentInstance;
    component.navigateToUser();
    expect(router.navigate).toHaveBeenCalledWith(['/users', 1]);
  });

  it('should render post title, body and user name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.modal-body h5').textContent).toContain(expectedPost.title);
    expect(compiled.querySelector('.modal-body p').textContent).toContain(expectedPost.body);
    expect(compiled.querySelector('.modal-body small').textContent).toContain(`Author: ${expectedPost.title}`);
  });

});
