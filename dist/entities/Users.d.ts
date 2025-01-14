import api from "../API";
import { SoundcloudComment, SoundcloudPlaylist, SoundcloudTrack, SoundcloudUser, SoundcloudUserCollection, SoundcloudUserFilter, SoundcloudUserSearchV2, SoundcloudUserV2, SoundcloudWebProfile } from "../types";
export declare class Users {
    private readonly api;
    private readonly resolve;
    constructor(api: api);
    /**
     * @deprecated use searchV2
     * Searches for users.
     */
    search: (params?: SoundcloudUserFilter) => Promise<SoundcloudUser[]>;
    /**
     * Searches for users using the v2 API.
     */
    searchV2: (params?: SoundcloudUserFilter) => Promise<SoundcloudUserSearchV2>;
    /**
     * @deprecated use getV2
     * Gets a user by URL or ID.
     */
    get: (userResolvable: string | number) => Promise<any>;
    /**
     * Fetches a user from URL or ID using Soundcloud v2 API.
     */
    getV2: (userResolvable: string | number) => Promise<SoundcloudUserV2>;
    /**
     * @deprecated
     * Gets all the tracks by the user.
     */
    tracks: (userResolvable: string | number) => Promise<SoundcloudTrack[]>;
    /**
     * @deprecated
     * Gets all the playlists by the user.
     */
    playlists: (userResolvable: string | number) => Promise<SoundcloudPlaylist[]>;
    /**
     * @deprecated
     * Gets all the users the user is following.
     */
    followings: (userResolvable: string | number) => Promise<SoundcloudUserCollection>;
    /**
     * @deprecated
     * Gets a specific following.
     */
    following: (userResolvable: string | number, anotherUserResolvable: string | number) => Promise<SoundcloudUser>;
    /**
     * @deprecated
     * Gets all of a users followers.
     */
    followers: (userResolvable: string | number) => Promise<SoundcloudUserCollection>;
    /**
     * @deprecated
     * Gets a specific follower.
     */
    follower: (userResolvable: string | number, anotherUserResolvable: string | number) => Promise<SoundcloudUser>;
    /**
     * @deprecated
     * Gets all comments by the user.
     */
    comments: (userResolvable: string | number) => Promise<SoundcloudComment[]>;
    /**
     * @deprecated
     * Gets all of a users favorite tracks.
     */
    favorites: (userResolvable: string | number) => Promise<SoundcloudTrack[]>;
    /**
     * @deprecated
     * Gets a specific favorite track.
     */
    favorite: (userResolvable: string | number, trackResolvable: string | number) => Promise<SoundcloudTrack>;
    /**
     * @deprecated
     * Gets all the web profiles on a users sidebar.
     */
    webProfiles: (userResolvable: string | number) => Promise<SoundcloudWebProfile[]>;
    /**
     * Searches for users (web scraping)
     */
    searchAlt: (query: string) => Promise<SoundcloudUserV2[]>;
    /**
     * Gets a user by URL (web scraping)
     */
    getAlt: (url: string) => Promise<SoundcloudUserV2>;
}
