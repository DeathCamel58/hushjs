/**
 * A publicly shared message
 */
interface Post {
  /**
   * The unique id of the Post
   */
  id: string;

  /**
   * The creation date of the Post
   *
   * @example 2024-02-21T01:15:54.100Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Post
   *
   * @example Observed: 2024-02-22T15:31:00.593Z
   */
  updatedAt: Date;

  /**
   * The {@link User#id} that created the Post
   */
  userId: string;

  /**
   * Probably the parent {@link Post#id} (if there is one)
   *
   * TODO: Check this
   */
  parentId: string | null;

  /**
   * Probably the {@link Group#id} this Post is in (if there is one)
   *
   * TODO: Check this
   */
  groupId: string | null;

  /**
   * The text content of the Post
   */
  text: string | undefined;

  /**
   * The font to use when rendering the Post
   */
  font: Font;

  /**
   * The URL of the media to show as the background of the Post. This can be an image URL, or a YouTube video URL.
   *
   * TODO: Check if this can be null
   */
  mediaUrl: string;

  /**
   * The type of Post this is
   */
  mediaType: MediaType;

  /**
   * Likely the longitude of the location where the Post is tied to
   *
   * TODO: Check this
   *
   * Observed on a GET to /videos
   */
  longitude: number;

  /**
   * Likely the latitude of the location where the Post is tied to
   *
   * TODO: Check this
   *
   * Observed on a GET to /videos
   */
  latitude: number;

  /**
   * Likely the User's IP address
   *
   * TODO: Check this
   *
   * TODO: This is likely a PII leak
   *
   * Observed on a GET to /videos
   */
  ip: string;

  /**
   * The {@link Address} where the Post is tied to
   *
   * TODO: Check if this can be null
   */
  address: Address | null;

  /**
   * The number of hearts on the Post
   */
  heartsCount: number;

  /**
   * The number of replies on the Post
   */
  repliesCount: number;

  /**
   * The number of chats on the Post
   */
  chatsCount: number;

  /**
   * The current moderation status of the Post
   */
  moderationStatus: ModerationStatus;

  /**
   * Likely the number of times the post has been flagged by users.
   *
   * TODO: Check this
   */
  flagCount: number;

  /**
   * Likely the reasons the post is banned
   *
   * TODO: Check this
   *
   * Observed on a GET to /videos
   *
   * Haven't observed data structure of this, just an empty object
   */
  algoBanReason: {};

  /**
   * TODO: Check this
   *
   * Observed on a GET to /videos
   */
  seeded: boolean;

  /**
   * The Post is not safe for work
   */
  isNsfw: boolean;

  /**
   * Probably if the Post is deleted
   *
   * TODO: Check this
   */
  deleted: boolean;

  /**
   * The {@link Group} is not safe for work
   */
  isGroupNsfw: boolean;

  /**
   * TODO: Check this
   */
  flockId: string;

  /**
   * Probably if the Post is a chat
   *
   * TODO: Check this
   */
  isChatPost: boolean;

  /**
   * The post is a story Post
   *
   * TODO: Check this
   */
  isStory: boolean;

  /**
   * The title of the story
   *
   * TODO: Check this
   */
  storyTitle: string | null;

  /**
   * TODO: Check this
   *
   * Observed on a GET to /videos
   */
  tags: string[] | undefined;

  /**
   * Likely the User that created the Post
   *
   * TODO: Check this
   *
   * Observed on a GET to /videos
   */
  user: User | undefined;

  /**
   * This is a string that can be used to represent the amount of time ago this Post is from
   *
   * @example '2d'
   * @example '20h'
   */
  hoursAgo: string;
}
