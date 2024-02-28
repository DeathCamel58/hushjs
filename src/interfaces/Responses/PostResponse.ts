/**
 * Response returned by the API at GET `/my/posts`
 */
interface PostResponse {
  /**
   * A series of {@link Post}s created by the {@link User}
   */
  chunkedPosts: Post[][];

  /**
   * If the current {@link User} has allowed NSFW posts
   */
  hasUserAllowedNsfwPosts?: boolean;
  blurNsfwPosts?: boolean;
  allowNsfwContent?: boolean;

  /**
   * Is there another page of data?
   */
  hasNextPage?: boolean;
  /**
   * The {@link ChatProfile} for the current {@link User}
   */
  currentUserProfile?: ChatProfile;

  /**
   * The current {@link User}'s settings
   */
  settings?: Setting;

  /**
   * The distance selected in the app
   *
   * @example "4"
   */
  rangeTickStop?: number;
}
