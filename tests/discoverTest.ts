import {Client} from "../src";

describe('Discover', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  test('Get', async () => {
    let data = await client.discover.get();

    expect(data).toBeDefined();
    expect(data?.posts).toBeDefined();
    expect(data?.groups).toBeDefined();
  });

  test('Search', async () => {
    const text = 'Meme';
    let data = await client.discover.search(text);

    expect(data).toBeDefined();
    expect(data?.posts).toBeDefined();
    expect(data?.groups).toBeDefined();
    expect(data?.searchText).toBe(text);
  });
});
