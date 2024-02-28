/**
 * Response returned by the API at GET `/my/posts`
 */
interface PostRepliesResponse {
  /**
   * The {@link Post}
   */
  post: Post;

  /**
   * The current {@link User}
   */
  user: User;

  /**
   * The {@link Reply}s to the {@link Post}
   */
  postReplies: Post[];

  /**
   * The {@link Post}'s author's {@link User}
   */
  author: User;

  /**
   * Has the current {@link User} liked this {@link Post}?
   */
  isLikedByMe: boolean;

  /**
   * The {@link ChatProfile} of the author
   */
  authorChatProfile: ChatProfile;

  backUrl: string;

  /**
   * This is a string that can be used to represent the amount of time ago this is from
   *
   * @example '2d'
   * @example '20h'
   */
  timeAgo: string;

  visibleGroupLink: boolean;
  visiblePreviousPostLink: boolean;

  /**
   * If the current {@link User} has allowed NSFW posts
   */
  hasUserAllowedNsfwPosts?: boolean;

  group: Group;
  allowChat: boolean;
}
