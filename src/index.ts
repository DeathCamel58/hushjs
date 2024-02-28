import {authService, AuthService} from './util/authService';
import {UserAPI} from "./apiFunctions/User";
import {ChatAPI} from "./apiFunctions/Chats";
import {DiscoverAPI} from "./apiFunctions/Discover";
import {FlocksAPI} from "./apiFunctions/Flocks";
import {GroupsApi} from "./apiFunctions/Group";
import {PostAPI} from "./apiFunctions/Posts";
import {VideoAPI} from "./apiFunctions/Videos";

/**
 * Client class for interfacing with the API
 */
export class Client {
  /**
   * The {@link AuthService} for this Client
   */
  auth: AuthService;

  /**
   * The {@link UserAPI} for this Client
   */
  user = new UserAPI;

  /**
   * The {@link ChatAPI} for this Client
   */
  chats = new ChatAPI;

  /**
   * The {@link DiscoverAPI} for this Client
   */
  discover = new DiscoverAPI;

  /**
   * The {@link FlocksAPI} for this Client
   */
  flocks = new FlocksAPI;

  /**
   * The {@link GroupsApi} for this Client
   */
  groups = new GroupsApi;

  /**
   * The {@link PostAPI} for this Client
   */
  posts = new PostAPI;

  /**
   * The {@link VideoAPI} for this Client
   */
  videos = new VideoAPI;

  public constructor(cookie?: string, eulaAccepted?: boolean) {
    this.auth = new AuthService();

    if (cookie) {
      // If the user is already created
      // Set the cookie
      authService.cookie = cookie;

      // Set the EULA acceptance
      // TODO: Don't accept the EULA if it's already been accepted
      if (eulaAccepted) {
        authService.eulaAccepted = eulaAccepted;
      }
    }
  };

  /**
   * Connects to the API using the information provided during the class's construction. This will accept the EULA for the {@link User} if needed.
   *
   * @returns A promise that resolves `true` if the connection was successful
   */
  public async connect() {
    if (!authService.cookie) {
      // If the user needs to be created
      if (!await this.user.create()) {
        return false;
      }
    }

    if (!authService.eulaAccepted) {
      // If we don't know if the EULA has been accepted, accept it now
      if (!await this.user.acceptEula()) {
        return false;
      }

      authService.eulaAccepted = true;
    }

    return true;
  }
}
