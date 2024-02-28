import {Client} from "../src";

describe('Videos', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  test('Get Latest', async () => {
    let data = await client.videos.get();

    expect(data).toBeDefined();
    expect(data?.page).toBe(1);
    expect(data?.videos.length).toBe(1);
  });
});
