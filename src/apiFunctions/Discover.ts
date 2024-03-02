import {AuthService} from "../util/authService";
import axios from "axios";

/**
 * Handles discover related API requests
 */
export class DiscoverAPI {
  /**
   * The {@link AuthService} for this instance
   */
  auth: AuthService;

  constructor(authService: AuthService) {
    this.auth = authService;
  }

  /**
   * Find new {@link Post}s and {@link Group}s
   */
  async get(): Promise<Discover|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/discover',
        {
          headers: {'Cookie': `Hush=${this.auth.cookie}`},
          params: {
            _data: 'routes/__app/discover'
          }
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Search for {@link Post}s and {@link Group}s based on text query
   * @param text The query to run
   */
  async search(text: string): Promise<Discover|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/discover/search/results',
        {
          headers: {'Cookie': `Hush=${this.auth.cookie}`},
          params: {
            _data: 'routes/__app/discover.search.results',
            searchText: text,
          }
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }
}
