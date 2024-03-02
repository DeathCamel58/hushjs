import crypto from "crypto";

/**
 * Device details that need to be sent to their API when creating an account
 */
export interface DeviceDetails {
  /**
   * The OS of the phone:
   *
   * @example 'android'
   */
  os: string;

  /**
   * 4 random bytes
   */
  deviceId: string;

  /**
   * We don't really use this, so we can just fill with 80 random bytes
   */
  pushToken: string;

  /**
   * Additional properties necessary to be sent to the API about the device
   */
  additionalProperties: {
    /**
     * TODO: Figure out this
     */
    name: string;

    /**
     * The model of the device
     */
    model: string;

    /**
     * The platform of the device
     *
     * @example 'android'
     */
    platform: string;

    /**
     * The operating system version of the device
     *
     * @example '13'
     */
    osVersion: string;

    /**
     * The manufacturer of the device
     *
     * @example 'Google'
     */
    manufacturer: string;

    /**
     * Is this a virtual device?
     */
    isVirtual: boolean;

    /**
     * The version of webview on the device
     *
     * @example '103.0.5060.71'
     */
    webViewVersion: string;
  }
}

/**
 * Stores the information necessary to authenticate requests against the API
 */
export class AuthService {
  /**
   * General device details sent to their API when creating an account
   */
  public deviceDetails: DeviceDetails | null = null;

  /**
   * The `Hush` cookie value that is used to authenticate against the API
   */
  public cookie: string | null = null;

  /**
   * Whether the current {@link User} has accepted the EULA
   */
  public eulaAccepted: boolean = false;

  constructor(deviceDetails?: DeviceDetails) {
    if (deviceDetails) {
      this.deviceDetails = deviceDetails;
    } else {
      // Set some known working default device details
      this.deviceDetails = {
        os: 'android',
        deviceId: crypto.randomBytes(4).toString('hex'),
        pushToken: crypto.randomBytes(80).toString('hex'),

        additionalProperties: {
          name: 'sdk_gphone64_x86_64',
          model: 'sdk_gphone64_x86_64',
          platform: 'android',
          osVersion: '13',
          manufacturer: 'Google',
          isVirtual: true,
          webViewVersion: '103.0.5060.71'
        }
      };
    }
  }
}
