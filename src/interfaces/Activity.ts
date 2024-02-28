/**
 * The type of Activity
 */
enum ActivityType {
  /**
   * A {@link Post} was created nearby
   */
  NearbyPost = 'NEARBY_POST',

  /**
   * A {@link Post} occurred in a {@link Group} the {@link User} is in
   */
  GroupPost = 'GROUP_POST',

  /**
   * A {@link Post} we created was hearted
   */
  Heart = 'HEART',

  Reply = 'REPLY',
  ChildReply = 'CHILD_REPLY',
}

/**
 * Actions that the user should be notified about
 */
interface Activity {
  /**
   * The ID of the Activity
   */
  id: string;

  /**
   * The type of Activity this is
   */
  type: ActivityType;

  /**
   * The {@link Post} that this Activity references
   */
  post: Post;

  /**
   * The {@link Group} that this activity references
   */
  group: Group | null;

  replyId: string;

  /**
   * This is a string that can be used to represent the amount of time ago this Activity is from
   *
   * @example '2d'
   * @example '20h'
   */
  timeAgo: string;

  /**
   * If this Activity has been marked as read
   */
  read: boolean;
}
