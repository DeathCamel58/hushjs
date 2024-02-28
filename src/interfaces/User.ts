/**
 * A User on the platform
 */
interface User {
  /**
   * The unique id of the User
   */
  id: string;

  /**
   * The creation date of the User
   *
   * @example Observed: 2023-03-26T19:27:48.081Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the User
   *
   * @example Observed: 2024-02-22T12:04:15.320Z
   */
  updatedAt: Date;

  /**
   * The display name of the User
   */
  username: string;

  /**
   * The time of the last profile change for the User
   *
   * @example Observed: 2023-07-20T03:18:16.762Z
   */
  profileUpdatedAt: Date;

  /**
   * The gender of the user, if set.
   * TODO: Observed type `null`, check if string
   */
  gender: Gender | null;

  /**
   * The age of the user, if set.
   * TODO: Observed type `null`, check if string
   */
  age: Age | null;

  /**
   * The {@link Address} of the user, if set.
   */
  address: Address | null;

  /**
   * The PIN of the user, if set.
   * TODO: Observed type `null`, check if string
   */
  pin: string | null;

  /**
   * The number of {@link Chat}s the User has been rated in
   */
  ratedChatsCount: number;

  /**
   * The overall rating of the User
   */
  rating: number;

  /**
   * The number of up votes the User has received
   */
  voteUpCount: number;

  /**
   * The number of down votes the User has received
   */
  voteDownCount: number;

  /**
   * The number of {@link Post}s the User has created
   */
  postsCount: number;

  /**
   * The number of hearts the User has made
   * TODO: Check if this is the number received
   */
  heartsCount: number;

  /**
   * The number of replies the User has made
   * TODO: Check if this is the number received
   */
  repliesCount: number;

  /**
   * The number of {@link Chat}s the User has been in
   */
  chatsCount: number;

  /**
   * TODO: Find an example of this being used
   */
  chatProfiles: null;

  /**
   * TODO: Check this
   */
  seeded: boolean;

  /**
   * The current moderation status of the User.
   */
  moderationStatus: ModerationStatus;

  /**
   * Probably if the User is deleted
   * TODO: Check this
   */
  deleted: boolean;

  /**
   * The number of quids the User has
   */
  quidsCount: number;

  /**
   * The number of hearts on replies the User has made
   * TODO: Check if this is the number received
   */
  replyHeadersCount: number;

  /**
   * The number of unread notifications the User has
   *
   * @example This is a leak of data only the account owner should have access to
   */
  unreadNotificationsCount: string;
}
