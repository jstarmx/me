jest.mock('superagent');

const Api = require('../');
const request = require('superagent');

const mockResponse = { ok: true, text: '{"photoset": {"photo": "photo"} }' };
request.get = jest.fn().mockReturnThis();
request.end = jest.fn().mockImplementation(callback => callback(null, mockResponse));

describe('Api', () => {
  describe('Flickr', () => {
    it('resolves a promise to fetch data', () => {
      Api.flickr().then((response) => {
        expect(response).toEqual({
          action: 'savePhotos',
          payload: 'photo',
        });
      });
    });

    it('rejects a promise to fetch data', () => {
      mockResponse.ok = false;

      Api.flickr().then(() => {}, (error) => {
        expect(error).toBe(null);
      });
    });
  });
});
