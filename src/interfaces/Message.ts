/**
 * An individual Message in a Conversation
 */
interface Message {
  /**
   * The unique id of the Message
   */
  id: string;

  /**
   * The creation date of the Message
   *
   * @example Observed: 2024-02-21T01:15:54.100Z
   */
  createdAt: Date;

  /**
   * The time of the last change to the Message
   *
   * @example Observed: 2024-02-22T15:31:00.593Z
   */
  updatedAt: Date;

  /**
   * The text content of the Message
   *
   * TODO: Check if this is undefined/null-d on an image message
   */
  text: string;

  /**
   * The URL of an attachment
   */
  attachmentUrl: string | null;

  /**
   * The type of the attachment
   *
   * @example This should likely be an enum
   */
  attachmentType: string | null;

  /**
   * The {@link User#id} that created the Message
   */
  senderId: string;

  /**
   * {@link Conversation#id} this Message is part of
   */
  conversationId: string;

  /**
   * Has the {@link User} that created this Message deleted it?
   *
   * NOTE: You aren't able to delete Messages in the app
   */
  deletedByCreator: boolean;
  deletedByPostUser: boolean;

  /**
   * If the receiving {@link User} has read the message
   */
  readByReceiver: boolean;
}
