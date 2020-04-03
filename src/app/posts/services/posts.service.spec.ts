import { PostsService } from './posts.service';
import { IPost } from 'src/app/interfaces/post.interface';
import { of } from 'rxjs';

describe('PostsService', () => {
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let service: PostsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new PostsService(<any>httpClientSpy);
  });

  it('should return expected posts (HttpClient called once)', () => {
    const expectedPosts: IPost[] =
      [{
        id: 1,
        userId: 2,
        title: 'test',
        body: 'test',
      }, {
        id: 2,
        userId: 3,
        title: 'test 2',
        body: 'test 2',
      }];

    httpClientSpy.get.and.returnValue(of(expectedPosts));

    service.getPosts().subscribe(
      posts => expect(posts).toEqual(expectedPosts, 'expected posts'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should send post (HttpClient called once)', () => {
    const post: IPost = {
      id: 1,
      userId: 2,
      title: 'test',
      body: 'test',
    };

    httpClientSpy.post.and.returnValue(of('success'));

    service.createPost(post).subscribe(
      res => expect(res).toEqual('success', 'expected successfully created post'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
});
