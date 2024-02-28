/**
 * The settings on a User account
 */
interface Setting {
  /**
   * The unique id of the Setting
   */
  id?: string;

  /**
   * The creation date of the Setting
   *
   * @example 2024-02-21T01:15:54.100Z
   */
  createdAt?: Date;

  /**
   * The time of the last change to the Setting
   *
   * @example Observed: 2024-02-22T15:31:00.593Z
   */
  updatedAt?: Date;

  /**
   * The {@link User#id} that the Setting is for
   */
  userId?: string;

  /**
   * Does the {@link User} have a privacy PIN enabled?
   */
  hasPrivacyPin: boolean;

  /**
   * Does the {@link User} want push notifications for replies?
   */
  pushReplies: boolean;

  /**
   * Does the {@link User} want push notifications for hearts?
   */
  pushHearts: boolean;

  /**
   * Does the {@link User} want push notifications for {@link Chat}s?
   */
  pushChat: boolean;

  /**
   * Does the {@link User} want push notifications for nearby {@link Post}s?
   */
  pushNearby: boolean;

  /**
   * Does the {@link User} want push notifications for {@link Post}s in {@link Group}s they're a member of?
   */
  pushGroups: boolean;

  /**
   * Does the {@link User} allow NSFW {@link Post}s?
   */
  allowNsfwPosts: boolean;
  removeNsfwContent: boolean;

  /**
   * Does the {@link User} want push notifications for {@link Post}s in {@link Flock}s they're a member of?
   */
  pushFlock: boolean;

  /**
   * Does the {@link User} want push notifications for sister replies?
   */
  pushSisterReplies: boolean;
}
