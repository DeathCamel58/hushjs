import Client from "../src";

describe('Chats', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  // let client2 = new Client();
  // client.connect();

  test('Get', async () => {
    let data = await client.chats.get();

    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThanOrEqual(7);
  });

  test('Get (00815c59-2ab3-46e7-8da4-0073ef8bca5d)', async () => {
    let data = await client.chats.getChat('00815c59-2ab3-46e7-8da4-0073ef8bca5d');

    expect(data).toBeDefined();
    expect(data?.userId).toBe('7dbd39f2-b5a0-47e9-9107-dfd2d9e6b835');
  });

  test('Get (10a13071-f439-4148-aeef-15b66a5a5a67)', async () => {
    let data = await client.chats.getChat('10a13071-f439-4148-aeef-15b66a5a5a67');

    expect(data).toBeDefined();
    expect(data?.userId).toBe('7dbd39f2-b5a0-47e9-9107-dfd2d9e6b835');
  });

  // test('Get Unauthorized (00815c59-2ab3-46e7-8da4-0073ef8bca5d)', async () => {
  //   let data = await client2.chats.getChat('00815c59-2ab3-46e7-8da4-0073ef8bca5d');
  //
  //   expect(data).toBeDefined();
  //   expect(data?.userId).toBe('7dbd39f2-b5a0-47e9-9107-dfd2d9e6b835');
  // });

  // test('Send Chat (10a13071-f439-4148-aeef-15b66a5a5a67)', async () => {
  //   let data = await client.chats.sendChat('10a13071-f439-4148-aeef-15b66a5a5a67', 'Hey! Hope you\'re doing well!');
  //
  //   expect(data).toBeDefined();
  //   expect(data).toBe(true);
  // });

  test('Allow Images (10a13071-f439-4148-aeef-15b66a5a5a67)', async () => {
    let data = await client.chats.allowImage('10a13071-f439-4148-aeef-15b66a5a5a67', true);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });

  test('Do Not Allow Images (10a13071-f439-4148-aeef-15b66a5a5a67)', async () => {
    let data = await client.chats.allowImage('10a13071-f439-4148-aeef-15b66a5a5a67', false);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });
});
