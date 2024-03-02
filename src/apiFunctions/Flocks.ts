import {AuthService} from "../util/authService";
import axios from "axios";

/**
 * Handles flocks related API requests
 */
export class FlocksAPI {
  /**
   * The {@link AuthService} for this instance
   */
  auth: AuthService;

  constructor(authService: AuthService) {
    this.auth = authService;
  }

  /**
   * Search for {@link Flock}s
   */
  async get(): Promise<Flock[]|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/flocks',
        {
          headers: {'Cookie': `Hush=${this.auth.cookie}`},
          params: {
            _data: 'routes/__app/flocks'
          }
        }
      );

      if (response.status === 200) {
        if (response.data?.flocks) {
          return response.data.flocks;
        } else {
          return [];
        }
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }
}
