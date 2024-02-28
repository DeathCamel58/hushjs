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
}
