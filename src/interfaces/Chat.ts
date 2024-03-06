/**
 * A conversation between Users
 */
interface Chat {
  /**
   * The {@link Post} that the Chat is in reference to
   */
  post: Post;

  /**
   * The {@link Conversation} linked to this Chat
   */
  conversation: Conversation;

  /**
   * The {@link Message}s in the Chat
   */
  chatMessages: Message[];

  /**
   * The profile of the {@link User} on the other side of the Chat
   *
   * @example This is a subset of the User's information
   */
  partnerChatProfile: User;

  /**
   * The profile of the {@link User} on the other side of the Chat
   */
  conversationPartner: User;

  /**
   * The {@link User} that we are in the Chat
   */
  user: User;

  /**
   * The profile of the {@link User} that we are in the Chat
   *
   * @example This is a subset of the {@link User}'s information
   */
  userChatProfile: User;

  /**
   * Is this Chat favorites
   */
  favoriteByCurrentUser: boolean;

  /**
   * Has the other {@link User} been up voted by us in this Chat?
   */
  isUpVote: boolean;

  /**
   * Has the other {@link User} been down voted by us in this Chat?
   */
  isDownVote: boolean;

  /**
   * TODO: Search for other values
   *
   * @example 'server-token'
   */
  serverToken: string;

  wsUrl: string;
  isRateBlockEnabled: boolean;

  /**
   * The {@link Address} of the other user in the Chat
   */
  address: Address | null;

  /**
   * If images are allowed in this conversation
   */
  allowImage: boolean;

  /**
   * Should the camera icon (to take a photo) be shown in the app?
   */
  visibleCameraIcon: boolean;

  /**
   * The number of {@link Message}s that incurred a quid cost
   */
  quidTransactionsCount: number;

    /**
     * The current {@link User}'s {@link User#id}
     */
  userId: string;
}
