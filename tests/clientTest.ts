import {Client} from "../src";

describe('Client', () => {
  test('Connect with new User', async () => {
    let client = new Client;
    const result = await client.connect();

    expect(result).toBe(true);
  });

  test('Connect with existing User', async () => {
    const cookie = 'eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE';
    const eulaAccepted = true;
    let client = new Client(cookie, eulaAccepted);
    const result = await client.connect();

    expect(result).toBe(true);
  });

  test('Connect with existing User, but unknown EULA status', async () => {
    const cookie = 'eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE';
    let client = new Client(cookie);
    const result = await client.connect();

    expect(result).toBe(true);
  });
});
