/**
 * The public chat profile of a User
 */
interface ChatProfile {
  /**
   * The unique id of the ChatProfile
   */
  id: string;

  /**
   * The creation date of the ChatProfile
   *
   * @example Observed: 2023-03-26T19:27:48.081Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the ChatProfile
   *
   * @example Observed: 2024-02-22T12:04:15.320Z
   */
  updatedAt: Date;

  /**
   * The {@link User#id} of the ChatProfile
   */
  userId: string;

  /**
   * The gender of the ChatProfile, if set.
   */
  gender: Gender | null;

  /**
   * The age of the ChatProfile, if set.
   */
  age: Age | null;

  /**
   * The {@link Address} of the ChatProfile, if set.
   */
  address: Address | null;

  /**
   * Latitude of the ChatProfile's location
   */
  latitude: number | null;

  /**
   * Longitude of the ChatProfile's location
   */
  longitude: number | null;
}
