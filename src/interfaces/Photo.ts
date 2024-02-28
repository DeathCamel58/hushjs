/**
 * An image
 */
interface Photo {
  /**
   * The ID of the Photo
   */
  id: number;

  /**
   * Photo URLs
   */
  src: {
    /**
     * 100px by 150px URL
     */
    tiny: string;

    /**
     * 427px by 640px URL
     */
    portrait: string;

    /**
     * 853px by 1280px URL
     */
    large: string;
  }
}
