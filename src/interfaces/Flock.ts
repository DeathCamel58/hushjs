/**
 * An educational institution
 */
interface Flock {
  /**
   * The unique id of the Flock
   */
  id: string;

  /**
   * The creation date of the Flock
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Flock
   *
   * @example Observed: 2023-05-19T06:43:56.782Z
   */
  updatedAt: Date;

  /**
   * The display name of the Flock
   */
  username: string;

  /**
   * The banner image URL for the Flock
   */
  bannerUrl: string;

  /**
   * Longitude of the Flock's location
   */
  longitude: number;

  /**
   * Latitude of the Flock's location
   */
  latitude: number;

  /**
   * The number of {@link User}s in the Flock
   */
  membersCount: number;
}
