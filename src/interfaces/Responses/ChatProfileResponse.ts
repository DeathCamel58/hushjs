/**
 * Response returned by the API at GET `/me/chat-profile`
 */
interface ChatProfileResponse {
  /**
   * The {@link ChatProfile} for the current {@link User}
   */
  chatProfile: ChatProfile;

  /**
   * TODO: Figure out what this is used for
   */
  remainingDays: Number;

  /**
   * If the current {@link ChatProfile} is editable
   */
  editEnabled: boolean;

  /**
   * The address string to show other users
   */
  address: string;
}
