import {Client} from "../src";

describe('User', () => {
  let client = new Client();
  client.connect();
  let client2 = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client2.connect();

  test('Get Account', async () => {
    let data = await client2.user.getAccount();

    expect(data).toBeDefined();
    expect(data?.stats).toBeDefined();
  });

  test('Get Unread Chat Count', async () => {
    let data = await client.user.getUnreadChatCount();

    expect(data).toBeGreaterThanOrEqual(0);
  });

  test('Get Unread Activity Count', async () => {
    let data = await client.user.getUnreadActivityCount();

    expect(data).toBe(0);
  });

  test('Get Badge Count', async () => {
    let data = await client.user.getBadgeCount();

    expect(data).toBe(0);
  });

  test('Search Background', async () => {
    let data = await client.user.getSearchBackground('Test');

    expect(data).toBeDefined();
    expect(data?.length).toEqual(10);
  });
});
