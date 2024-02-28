import {authService} from "../util/authService";
import axios from "axios";

/**
 * Handles group related API requests
 */
export class GroupsApi {
  /**
   * Gets the {@link Group}s that the current {@link User} is a member of
   */
  async get(): Promise<Group[]|null> {
    try {
      const response = await axios.get('https://771b92c9.hush.ac/groups',
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/groups'
          }
        }
      );

      if (response.status === 200) {
        return response.data?.groups;
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return null;
  }

  /**
   * Joins a {@link Group} with the current {@link User}
   * @param groupId The {@link Group#id} to join
   */
  async join(groupId: string): Promise<boolean> {
    try {
      const response = await axios.post(`https://771b92c9.hush.ac/groups/${groupId}/members`,
        { isMember: false },
        {
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/groups.$id.members'
          }
        }
      );

      if (response.status === 200) {
        if (response.data.success) {
          return true;
        } else if (response.data.message === 'You are already a member') {
          return true;
        }
      } else {
        console.info(`Bad HTTP response status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error: ', error.response?.data || error.message);
    }
    return false;
  }
  /**
   * Gets the {@link Group}s that the current {@link User} is a member of
   * @param groupId The {@link Group#id} to get Posts
   */
  async getGroup(groupId: string): Promise<GroupResponse|null> {
    try {
      const response = await axios.get(`https://771b92c9.hush.ac/groups/${groupId}/posts`,
        {
          headers: {'Cookie': `Hush=${authService.cookie}`},
          params: {
            _data: 'routes/__app/groups.$id.posts',
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
   * Leaves a {@link Group} with the current {@link User}
   * @param groupId The {@link Group#id} to leave
   */
  async leave(groupId: string): Promise<boolean> {
    const group = await this.getGroup(groupId);

    try {
      const response = await axios.delete(`https://771b92c9.hush.ac/group-members/${group?.member.id}`,
        {
          data: { isMember: true },
          headers: {
            'Cookie': `Hush=${authService.cookie}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            _data: 'routes/__app/group-members.$id'
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
}
