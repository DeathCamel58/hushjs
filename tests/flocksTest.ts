import {Client} from "../src";

describe('Flocks', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  test('Get', async () => {
    let data = await client.flocks.get();

    expect(data).toBeDefined();
    expect(data?.length).toEqual(10);
  });
});
