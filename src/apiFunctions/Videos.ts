import {authService} from "../util/authService";
import axios from "axios";

/**
 * Handles video related API requests
 */
export class VideoAPI {
  /**
   * Fetch the video {@link Post}s
   */
  async get(page?: number): Promise<VideosResponse | null> {
    try {
      const params: {
        _data: string;
        page?: number;
      } = {
        _data: 'routes/__app/videos'
      }
      if (page) {
        params.page = page;
      }

      const response = await axios.get('https://771b92c9.hush.ac/videos',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: params
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
