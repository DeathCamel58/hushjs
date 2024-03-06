interface Conversation {
  /**
   * The unique id of the Conversation
   *
   * This can be acquired by using {@link PostAPI#getChatId}
   */
  id: string;

  /**
   * The creation date of the Conversation
   *
   * @example Observed: 2024-02-22T17:50:20.363Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Conversation
   *
   * @example Observed: 2024-02-22T17:55:29.483Z
   */
  updatedAt: Date;

  /**
   * The Post {@link Post#id} that this Conversation is in reference to
   */
  postId: string | null;

  /**
   * The title of the Conversation
   *
   * @example This has been seen as the username that started the conversation
   *
   * TODO: Check if this is the initiator, or the other user
   */
  title: string | undefined;

  /**
   * The {@link Post#mediaUrl} to show as the header of the Conversation.
   *
   * TODO: Check if this can be null
   */
  postImageSrc: string;

  /**
   * The {@link User#id} that created the {@link Post} this conversation is about
   */
  postUserId: string;

  /**
   * The {@link User#id} that created the Conversation
   */
  creatorId: string;

  /**
   * The {@link Message.text} of the most recent {@link Message} in the Conversation
   */
  lastMessage: string;

  /**
   * The {@link User#id} that sent the last {@link Message} in the Conversation
   */
  lastMessageAuthorId: string;

  /**
   * The number of chats on the Conversation
   */
  messagesCount: number;

  /**
   * The {@link User#username} that created the {@link Post}
   */
  postUsername: string;

  /**
   The {@link User#username} that created the Conversation
   */
  creatorUsername: string;

  /**
   * Probably if the Post is deleted
   *
   * TODO: Check this
   */
  deletedByPostUser: boolean;

  /**
   * Probably if the Post is deleted
   *
   * TODO: Check this
   */
  deletedByPostCreator: boolean;

  /**
   * The number of chats on the Post
   */
  chatsCount: number;
}
