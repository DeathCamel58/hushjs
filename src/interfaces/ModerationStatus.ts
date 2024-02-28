/**
 * The situation of moderation
 */
enum ModerationStatus {
  /**
   * No moderation necessary
   */
  Clear = "CLEAR",

  /**
   * This has investigated, and decided to be okay
   */
  ResolvedClear = "RESOLVED_CLEAR",

  /**
   * This has been investigated, and the {@link User} was banned
   */
  ResolvedBanned = "RESOLVED_BANNED",
}
