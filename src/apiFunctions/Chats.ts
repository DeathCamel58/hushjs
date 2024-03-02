import {AuthService} from "../util/authService";
import axios from "axios";

/**
 * Handles chat related API requests
 */
export class ChatAPI {
  /**
   * The {@link AuthService} for this instance
   */
  auth: AuthService;

  constructor(authService: AuthService) {
    this.auth = authService;
  }

  /**
   * Get the {@link Conversation}s for the current {@link User}
   */
  async get(): Promise<Conversation[]|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/chats',
        {
          headers: {'Cookie': `Hush=${this.auth.cookie}`},
          params: {
            _data: 'routes/__app/chats'
          }
        }
      );

      if (response.status === 200) {
        return response.data["conversations"];
      } else if (response.status === 204) {
        return [];
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Get the {@link Chat} for the specified Chat id
   */
  async getChat(chatId: string): Promise<Chat|null> {
    try {
      const response = await axios.get(`https://771b92c9.hush.ac/chats/${chatId}`,
        {
          headers: {'Cookie': `Hush=${this.auth.cookie}`},
          params: {
            _data: 'routes/__app/chats.$id'
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
   * Sends text to a {@link Chat}
   * @param chatId The Chat id to message
   * @param text The message to send
   */
  async sendChat(chatId: string, text: string): Promise<boolean> {
    try {
      const response = await axios.post(`https://771b92c9.hush.ac/chats/${chatId}`,
        { text: text },
        {
          headers: {
            'Cookie': `Hush=${this.auth.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/chats.$id'
          }
        }
      );

      if (response.status === 200) {
        return true;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return false;
  }

  /**
   * Mark whether we allow images in a {@link Chat}
   * @param chatId The Chat id
   * @param allow Should the {@link Chat} allow images?
   */
  async allowImage(chatId: string, allow: boolean): Promise<boolean|null> {
    try {
      const response = await axios.put(`https://771b92c9.hush.ac/chats/${chatId}`,
        { allowImage: allow ? 'on' : 'off' },
        {
          headers: {
            'Cookie': `Hush=${this.auth.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/chats.$id'
          }
        }
      );

      if (response.status === 200) {
        return response.data.success;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  // TODO: Check if favorite-ing a conversation belongs here
}
