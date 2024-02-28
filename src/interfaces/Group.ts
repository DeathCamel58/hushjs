/**
 * A collection of users that have a specified topic that can be posted to
 */
interface Group {
  /**
   * The unique id of the Group
   */
  id: string;

  /**
   * The creation date of the Group
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Group
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  updatedAt: Date;

  /**
   * The display name of the Group
   */
  name: string;

  /**
   * The {@link User#id} that created the Group
   */
  founderId: string;

  /**
   * The rules of the Group
   */
  rules: string;

  /**
   * The URL of the Group's banner image
   */
  bannerUrl: string;

  /**
   * The current moderation status of the Group
   */
  moderationStatus: ModerationStatus;

  /**
   * The number of members in the Group
   */
  membersCount: number;

  /**
   * The number of times the Group has been flagged for moderation
   */
  flagsCount: number;

  /**
   * The Group is not safe for work
   */
  isNsfw: boolean;

  /**
   * Probably if the Group is deleted
   * TODO: Check this
   */
  deleted: boolean;

  /**
   * If the current {@link User} is a member of the Group
   */
  isMember: boolean;
}
