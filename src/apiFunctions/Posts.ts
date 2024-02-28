import {authService} from "../util/authService";
import axios from "axios";

/**
 * Handles post related API requests
 */
export class PostAPI {
  /**
   * Fetch the latest {@link Post}s
   */
  async getLatest(): Promise<PostResponse | null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/posts/latest',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/posts.latest'
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
   * Fetch the latest {@link Post}s
   * @param settings An object containing settings for the query
   *
   * @example `let x = await client.posts.getNearby();`
   * @example `let x = await client.posts.getNearby({latitude: 37.42342342342342, longitude: -122.08395287867832, range: 5, page: 5});`
   */
  async getNearby(settings?: {
    latitude?: number,
    longitude?: number,
    range?: number,
    page?: number
  }): Promise<PostResponse | null> {
    try {
      // Build out the settings for the request
      let params: {
        _data: string;
        lat?: number;
        long?: number;
        range?: number;
        page?: number;
      } = {
        _data: 'routes/__app/posts.nearby',
      };
      if (settings) {
        if (settings.latitude && settings.longitude) {
          params.lat = settings.latitude;
          params.long = settings.longitude;
        }
        if (settings.range) {
          params.range = settings.range;
        }
        if (settings.page) {
          params.page = settings.page;
        }
      }

      const response = await axios.get('https://771b92c9.hush.ac/posts/nearby',
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

  /**
   * Fetch the popular {@link Post}s
   */
  async getPopular(): Promise<PostResponse | null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/posts/popular',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/posts.popular'
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
   * Fetch the replies to a {@link Post}
   * @param postId The {@link Post#id} to get replies for
   */
  async getReplies(postId: string): Promise<PostRepliesResponse| null> {
    try {
      const response = await axios.get(`https://771b92c9.hush.ac/posts/${postId}`,
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/posts.$id'
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

  // TODO: Handle POST /posts/${postId}/replies
  // NOTE: Not implementing /posts/${postId}/chat, as it just returns a HTTP 204

  /**
   * Likes a {@link Post}
   * @param postId The {@link Post#id} to like
   */
  async like(postId: string): Promise<PostRepliesResponse| null> {
    try {
      const response = await axios.put(`https://771b92c9.hush.ac/posts/${postId}/like`,
        { liked: true },
        {
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/posts.$id.like'
          }
        }
      );

      if (response.status === 200) {
        return response.data.isLikedByMe;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  // TODO: Handle new post creation POST /posts
}