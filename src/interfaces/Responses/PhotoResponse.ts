/**
 * Response returned by the API at GET `/api/search-background`
 */
interface PhotoResponse {
  /**
   * The results for the query
   */
  results: {
    /**
     * The final query that was actually ran
     *
     * NOTE: Probably under some circumstances, their API will modify your query string
     */
    finalQuery: string;

    /**
     * The results for the actual query
     */
    results: {
      /**
       * The photos that were returned
       */
      photos: Photo[];
    };
  };

  /**
   * The query that the results are for
   */
  text: string;
}
