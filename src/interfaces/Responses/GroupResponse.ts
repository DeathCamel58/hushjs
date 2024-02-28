/**
 * Response returned by the API at GET `/groups/${groupId}/posts`
 */
interface GroupResponse {
  /**
   * A series of {@link Post}s in the {@link Group}
   */
  chunkedPosts: Post[][];

  /**
   * The {@link Group} that the response is about
   */
  group: Group;

  /**
   * The current {@link User}s {@link Member} in the {@link Group}
   */
  member: Member;

  /**
   * If the current {@link User} is a member of the {@link Group}
   */
  isMember: boolean;

  /**
   * If the current {@link User} is the founder of the {@link Group}
   */
  isFounder: boolean;

  /**
   * The current {@link User#id}
   */
  userId: string;
  visibleNsfwTag: boolean;

  /**
   * A list of {@link Post}s that need moderation
   *
   * TODO: Find an example of this used
   */
  postsForModerator: Post[]; // TODO: Check that this isn't a Post[][]

  /**
   * Is there another page of {@link Post}s
   */
  hasNextPage: boolean;
}
