/**
 * An individual User in a Group
 */
interface Member {
  /**
   * The unique id of the Member
   */
  id: string;

  /**
   * The creation date of the Member
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Member
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  updatedAt: Date;

  /**
   * The {@link User#id} that is in the group
   */
  userId: string;

  /**
   * The {@link Group#id}
   */
  groupId: string;

  /**
   * Is the current {@link User} a moderator?
   */
  moderator: boolean;

  /**
   * Is the current {@link User} muted?
   */
  mute: boolean;

  /**
   * The moderation status of the member
   */
  moderatorStatus: null;
}
