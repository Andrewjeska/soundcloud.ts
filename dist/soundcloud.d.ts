import api from "./API";
import { Apps, Comments, Me, Oembed, Playlists, Resolve, Tracks, Users, Util } from "./entities/index";
/**
 * The main class for interacting with the Soundcloud API.
 */
export default class Soundcloud {
    static clientID: string;
    static oauthToken: string;
    api: api;
    tracks: Tracks;
    users: Users;
    playlists: Playlists;
    oembed: Oembed;
    resolve: Resolve;
    me: Me;
    comments: Comments;
    apps: Apps;
    util: Util;
    constructor(clientID?: string, oauthToken?: string);
}
export * from "./entities/index";
export * from "./types/index";
