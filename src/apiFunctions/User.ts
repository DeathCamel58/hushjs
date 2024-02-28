import {authService} from "../util/authService";
import axios from "axios";

/**
 * Handles User related API requests
 */
export class UserAPI {
  /**
   * Get the current {@link User}
   */
  async getAccount(): Promise<AccountResponse|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/me/account',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/me.account',
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

  // TODO: Add PUT /me/account to mark activities as read
  // TODO: Figure out what GET /me/change-nickname does

  /**
   * Change the {@link User#username} for the current {@link User}
   * @param nickname The nickname to set
   * @return `true` if {@link User#username} was changed
   */
  async changeNickname(nickname: string): Promise<boolean> {
    try {
      const response = await axios.put('https://771b92c9.hush.ac/me/change-nickname',
        { username: nickname },
        {
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/me.change-nickname'
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
    return false;
  }

  /**
   * Get the current {@link User} {@link ChatProfile}
   */
  async getChatProfile(): Promise<ChatProfileResponse|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/me/chat-profile',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/me.chat-profile'
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
   * Change the current {@link User}'s {@link ChatProfile}
   * @param gender The gender to set
   * @param age The age to set
   * @param latitude The latitude to set
   * @param longitude The longitude to set
   */
  async setChatProfile(gender: string, age: string, latitude: Number, longitude: Number): Promise<boolean> {
    try {
      const response = await axios.post('https://771b92c9.hush.ac/me/chat-profile',
        {
          gender: gender,
          age: age,
          latitude: latitude,
          longitude: longitude,
        },
        {
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/me.chat-profile'
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
    return false;
  }

  /**
   * Get the current {@link User} and their {@link Setting}s
   */
  async getUser(): Promise<UserResponse|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/me/settings',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/me.settings'
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
   * Update the {@link User} {@link Setting}
   * @param setting The setting to set for the user
   */
  async updateSetting(setting: Setting): Promise<boolean> {
    try {
      const response = await axios.put('https://771b92c9.hush.ac/me/settings',
        { setting },
        {
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/me.settings'
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
    return false;
  }

  /**
   * Creates a new {@link User}
   *
   * NOTE: This {@link User} will need to accept the EULA before they can use the API.
   */
  async create(): Promise<boolean> {
    try {
      const response = await axios.post('https://771b92c9.hush.ac/api/device',
        {
          os: authService.deviceDetails?.os,
          deviceId: authService.deviceDetails?.deviceId,
          pushToken: authService.deviceDetails?.pushToken,
          details: JSON.stringify(authService.deviceDetails?.additionalProperties)
        },
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          maxRedirects: 0,
          validateStatus: function (status) {
            return status >= 200 && status < 400; // We need to accept the 302
          },
        }
      );

      // Auth was *only* successful if there's a returned cookie in response headers
      if (response.headers && 'set-cookie' in response.headers) {
        // Verify that the `Hush` cookie is set
        const setCookieHeader = response.headers['set-cookie'];
        if (setCookieHeader && setCookieHeader.length > 0 && setCookieHeader[0].includes('Hush')) {
          const HushCookie = setCookieHeader[0].split("Hush=")[1].split(";")[0];
          authService.cookie = HushCookie;

          return true;
        }
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return false;
  }

  /**
   * Accept the EULA for the current {@link User}
   */
  async acceptEula(): Promise<boolean> {
    try {
      const response = await axios.put('https://771b92c9.hush.ac/terms-of-use',
        {},
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/terms-of-use',
          }
        }
      );

      if (response.status === 204) {
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
   * Get the number of unread {@link Chat}s for the current {@link User}
   */
  async getUnreadChatCount(): Promise<number|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/api/chats/unread-count',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
        }
      );

      if (response.status === 200) {
        return Number(response.data.unreadCount);
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Get the number of unread Activities for the current {@link User}
   */
  async getUnreadActivityCount(): Promise<number|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/api/activities/count',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
        }
      );

      if (response.status === 200) {
        return Number(response.data.unreadCount);
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Get the number of Badges for the current {@link User}
   */
  async getBadgeCount(): Promise<number|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/api/get-badge-count',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
        }
      );

      if (response.status === 200) {
        if (typeof response.data.badgeCount === 'string') {
          response.data.badgeCount = Number(response.data.badgeCount);
        }
        return response.data.badgeCount;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Run a search for {@link Photo}s with the specified text.
   *
   * @param text - The text to search for
   */
  async getSearchBackground(text: string): Promise<PhotoResponse|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/api/search-background',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            text: text
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
