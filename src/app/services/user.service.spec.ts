import { of } from 'rxjs';

import { UserService } from './user.service';
import { IUser } from '../interfaces/user.interface';

describe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(<any>httpClientSpy);
  });

  it('should return expected users (HttpClient called once)', () => {
    const expectedUsers: IUser[] =
      [{
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
        phone: '342432423'
      }, {
        id: 2,
        name: 'test 2',
        username: 'test 2',
        email: 'test2@test.com',
        company: {
          name: 'test2'
        },
        address: {
          street: 'test2',
          suite: 'test2',
          city: 'test2',
        },
        phone: '3424234'
      }];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    service.getAll().subscribe(
      users => expect(users).toEqual(expectedUsers, 'expected users'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should get specific user by id (HttpClient called once)', () => {
    const user: IUser = {
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
    };

    httpClientSpy.get.and.returnValue(of(user));

    service.getUserById('1').subscribe(
      res => expect(res).toEqual(user, 'expected successfully get specific user'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
