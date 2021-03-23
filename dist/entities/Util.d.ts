import api from "../API";
export declare class Util {
    private readonly api;
    private readonly playlists;
    private readonly users;
    private readonly tracks;
    constructor(api: api);
    /**
     * Gets the direct streaming link of a track.
     */
    streamLink: (songUrl: string) => Promise<string>;
    /**
     * Downloads the mp3 stream of a track as readable stream.
     */
    private downloadTrackReadableStream;
    /**
     * Utility for awaiting a stream.Writable
     */
    private readonly awaitStream;
}
