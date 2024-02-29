import {Client} from "../src";

describe('Posts', () => {
  let client = new Client('eyJ1c2VySWQiOiI3ZGJkMzlmMi1iNWEwLTQ3ZTktOTEwNy1kZmQyZDllNmI4MzUifQ%3D%3D.d8DEeGaDoKDx7VlWBBIZMT7VHjZUvLon5Hq7dcjrETE', true);
  client.connect();

  test('Get Latest', async () => {
    let data = await client.posts.getLatest();

    expect(data).toBeDefined();
    expect(data?.chunkedPosts).toBeDefined();
  });

  test('Get Nearby (Current User Location)', async () => {
    let data = await client.posts.getNearby();

    expect(data).toBeDefined();
    expect(data?.chunkedPosts).toBeDefined();
  });

  test('Get Nearby (Custom Location and Page)', async () => {
    const settings = {
      latitude: 37.42342342342342,
      longitude: -122.08395287867832,
      page: 5
    };
    let data = await client.posts.getNearby(settings);

    expect(data).toBeDefined();
    expect(data?.chunkedPosts).toBeDefined();
    expect(data?.chunkedPosts.length).toBeGreaterThanOrEqual(1);
  });

  test('Get Popular', async () => {
    let data = await client.posts.getPopular();

    expect(data).toBeDefined();
    expect(data?.chunkedPosts).toBeDefined();
  });

  test('Get Replies (255c6f46-253e-492d-9639-a999b11a51e0)', async () => {
    let data = await client.posts.getReplies('255c6f46-253e-492d-9639-a999b11a51e0');

    expect(data).toBeDefined();
    expect(data?.post).toBeDefined();
    expect(data?.postReplies).toBeDefined();
  });

  test('Get Replies (58d1a46a-f4ff-4dfe-9d0f-0b4646fe50f7)', async () => {
    let data = await client.posts.getReplies('58d1a46a-f4ff-4dfe-9d0f-0b4646fe50f7');

    expect(data).toBeDefined();
    expect(data?.post).toBeDefined();
    expect(data?.postReplies).toBeDefined();
  });

  test('Like Post (255c6f46-253e-492d-9639-a999b11a51e0)', async () => {
    let data = await client.posts.like('255c6f46-253e-492d-9639-a999b11a51e0');

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });

  test('Reply to Post (255c6f46-253e-492d-9639-a999b11a51e0)', async () => {
    const postId = '255c6f46-253e-492d-9639-a999b11a51e0';
    const text = 'This is so true!';
    const font = 'sans';
    let data = await client.posts.reply(postId, text, font);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });

  test('Create Post (Image)', async () => {
    const options = {
      mediaUrl: 'https://images.pexels.com/photos/4669104/pexels-photo-4669104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      text: 'Kinda bored today',
      isNsfw: false,
      tagId: '',
      font: 'mono',
      latitude: 37.42342342342342,
      longitude: -122.08395287867832,
      ip: '69.69.69.69',
    }
    let data = await client.posts.new(options);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });
});
