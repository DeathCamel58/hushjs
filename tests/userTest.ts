import {Client} from "../src";
import crypto from "crypto";

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

  test('Change Nickname (Good Nickname)', async () => {
    // Generate a random string to use as a nickname
    const nickname = crypto.randomBytes(7).toString('hex').replace(' ', '');
    let data = await client.user.changeNickname(nickname);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });

  test('Change Nickname (Bad Nickname)', async () => {
    // Ampersands aren't allowed in nicknames
    let data = await client2.user.changeNickname('Test&Name');

    expect(data).toBeDefined();
    expect(data).toBe(false);
  });

  test('Get Chat Profile', async () => {
    let data = await client.user.getChatProfile();

    expect(data).toBeDefined();
    expect(data?.chatProfile).toBeDefined();
  });

  test('Set Chat Profile', async () => {
    const gender = "MALE";
    const age = "18-20";
    const latitude = 37.42342342342342;
    const longitude = -122.08395287867832;
    let data = await client.user.setChatProfile(gender, age, latitude, longitude);

    expect(data).toBeDefined();
    expect(data).toBe(true);
  });

  test('Get User and Settings', async () => {
    let data = await client.user.getUser();

    expect(data).toBeDefined();
    expect(data?.user).toBeDefined();
    expect(data?.setting).toBeDefined();
  });

  test('Update User Settings', async () => {
    const settings = {
      hasPrivacyPin: false,
      pushReplies: true,
      pushHearts: false,
      pushChat: true,
      pushNearby: false,
      pushGroups: true,
      allowNsfwPosts: false,
      removeNsfwContent: true,
      pushFlock: true,
      pushSisterReplies: false,
    };
    let data = await client.user.updateSetting(settings);

    expect(data).toBeDefined();
    expect(data).toBe(true);
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
    expect(data?.results.results.photos.length).toEqual(10);
  });
});
