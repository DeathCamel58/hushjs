/**
 * Response returned by the API at GET `/videos`
 */
interface VideosResponse {
  /**
   * What page of results this is about
   */
  page: number;

  /**
   * The returned videos
   *
   * NOTE: Videos are a {@link Post}
   *
   * NOTE: This array has only been observed with one element
   */
  videos: Post[];

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
   * The video {@link Post}
   */
  post: Post;

  /**
   * Has the current {@link User} liked this post?
   */
  isLikedByMe: boolean;

  /**
   * The {@link ChatProfile} for the current {@link User}
   */
  currentUserProfile?: ChatProfile;

  /**
   * The current {@link User}'s settings
   */
  settings?: Setting;
}
