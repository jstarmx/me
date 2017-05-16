import request from 'superagent';

import { flickr } from '../';

jest.mock('superagent');

const mockResponse = { ok: true, text: '{"photoset": {"photo": "photo"} }' };
request.get = jest.fn().mockReturnThis();
request.end = jest.fn(callback => callback(null, mockResponse));

describe('Flickr', () => {
  it('resolves a promise to fetch data', () => {
    flickr().then((response) => {
      expect(response).toEqual({
        action: 'savePhotos',
        payload: 'photo',
      });
    });
  });

  it('rejects a promise to fetch data', () => {
    mockResponse.ok = false;

    flickr().then(() => {}, (error) => {
      expect(error).toBe(null);
    });
  });
});
