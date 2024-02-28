/**
 * Returned posts and groups for a search or when discovering new content
 */
interface Discover {
  /**
   * The returned {@link Post}s
   */
  posts: Post[];

  /**
   * The returned {@link Group}s
   */
  groups: Group[];

  /**
   * If the current {@link User} has allowed NSFW posts
   */
  hasUserAllowedNsfwPosts?: boolean;

  /**
   * The text that has been searched for
   */
  searchText?: string;
}
