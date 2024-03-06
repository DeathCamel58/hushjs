import AuthService from './util/authService';
import UserAPI from "./apiFunctions/User";
import ChatAPI from "./apiFunctions/Chats";
import DiscoverAPI from "./apiFunctions/Discover";
import FlocksAPI from "./apiFunctions/Flocks";
import GroupsApi from "./apiFunctions/Group";
import PostAPI from "./apiFunctions/Posts";
import VideoAPI from "./apiFunctions/Videos";

/**
 * Client class for interfacing with the API
 */
export default class Client {
  /**
   * The {@link AuthService} for this Client
   */
  auth: AuthService;

  /**
   * The {@link UserAPI} for this Client
   */
  user: UserAPI;

  /**
   * The {@link ChatAPI} for this Client
   */
  chats: ChatAPI;

  /**
   * The {@link DiscoverAPI} for this Client
   */
  discover: DiscoverAPI;

  /**
   * The {@link FlocksAPI} for this Client
   */
  flocks: FlocksAPI;

  /**
   * The {@link GroupsApi} for this Client
   */
  groups: GroupsApi;

  /**
   * The {@link PostAPI} for this Client
   */
  posts: PostAPI;

  /**
   * The {@link VideoAPI} for this Client
   */
  videos: VideoAPI;

  public constructor(cookie?: string, eulaAccepted?: boolean) {
    this.auth = new AuthService();

    if (cookie) {
      // If the user is already created
      // Set the cookie
      this.auth.cookie = cookie;

      // Set the EULA acceptance
      // TODO: Don't accept the EULA if it's already been accepted
      if (eulaAccepted) {
        this.auth.eulaAccepted = eulaAccepted;
      }
    }

    this.user = new UserAPI(this.auth);
    this.chats = new ChatAPI(this.auth);
    this.discover = new DiscoverAPI(this.auth);
    this.flocks = new FlocksAPI(this.auth);
    this.groups = new GroupsApi(this.auth);
    this.posts = new PostAPI(this.auth);
    this.videos = new VideoAPI(this.auth);
  };

  /**
   * Connects to the API using the information provided during the class's construction. This will accept the EULA for the {@link User} if needed.
   *
   * @returns A promise that resolves `true` if the connection was successful
   */
  public async connect() {
    if (!this.auth.cookie) {
      // If the user needs to be created
      if (!await this.user.create()) {
        return false;
      }
    }

    if (!this.auth.eulaAccepted) {
      // If we don't know if the EULA has been accepted, accept it now
      if (!await this.user.acceptEula()) {
        return false;
      }

      this.auth.eulaAccepted = true;
    }

    return true;
  }
}
