/**
 * The current User's stats and activity notifications
 *
 * Response returned by the API at GET `/me/account`
 */
interface AccountResponse {
  /**
   * Counts of various things the {@link User} has done
   */
  stats: {
    /**
     * The number of {@link Post}s the {@link User} has made
     */
    postsCount: number;

    /**
     * The number of Hearts the {@link User} has made
     */
    heartsCount: number;

    /**
     * The number of Replies the {@link User} has made
     */
    repliesCount: number
  }

  /**
   * The list of {@link Activity} notifications
   */
  activities: Activity[];

  /**
   * Is there another page of data?
   */
  hasNextPage: boolean;
}
