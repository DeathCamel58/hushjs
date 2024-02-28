/**
 * Response returned by the API at:
 *
 * * GET `/me/change-nickname`
 * * GET `/me/quids`
 * * GET `/me/settings`
 */
interface UserResponse {
  /**
   * The current {@link User}
   */
  user: User;

  /**
   * The current {@link User}'s settings
   */
  setting?: Setting;
}
