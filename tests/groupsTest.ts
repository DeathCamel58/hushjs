import Client from "../src";

describe('Groups', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  test('Get', async () => {
    let data = await client.groups.get();

    expect(data).toBeDefined();
    // Other tests will affect the number of Groups we're in
    expect(data?.length).toBeGreaterThanOrEqual(0);
  });

  test('Join (0eb4cb91-cd91-40c4-a6b7-00a82e6e7849)', async () => {
    const groupId = '0eb4cb91-cd91-40c4-a6b7-00a82e6e7849';
    let data = await client.groups.join(groupId);

    expect(data).toBeDefined();
    expect(data).toEqual(true);
  });

  test('Get Group (0eb4cb91-cd91-40c4-a6b7-00a82e6e7849)', async () => {
    const groupId = '0eb4cb91-cd91-40c4-a6b7-00a82e6e7849';
    let data = await client.groups.getGroup(groupId);

    expect(data).toBeDefined();
    expect(data?.group).toBeDefined();
  });

  test('Leave (0eb4cb91-cd91-40c4-a6b7-00a82e6e7849)', async () => {
    const groupId = '0eb4cb91-cd91-40c4-a6b7-00a82e6e7849';
    let data = await client.groups.leave(groupId);

    expect(data).toBeDefined();
    expect(data).toEqual(true);
  });
});
