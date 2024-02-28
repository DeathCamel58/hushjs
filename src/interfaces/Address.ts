/**
 * A general location
 */
interface Address {
  /**
   * The county/city name
   *
   * TODO: Check if this can be null
   */
  subRegion: string;

  /**
   * The state name
   *
   * TODO: Check if this can be null
   */
  region: string;

  /**
   * The country name
   *
   * TODO: Check if this can be null
   */
  country: string;
}
