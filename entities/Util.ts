import axios from "axios";
import * as stream from "stream";
import api from "../API";
import { Playlists, Tracks, Users } from "./index";

export class Util {
  private readonly playlists = new Playlists(this.api);
  private readonly users = new Users(this.api);
  private readonly tracks = new Tracks(this.api);
  constructor(private readonly api: api) {}

  /**
   * Gets the direct streaming link of a track.
   */
  public streamLink = async (songUrl: string) => {
    const headers = {
      referer: "soundcloud.com",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    };
    if (songUrl.includes("m.soundcloud.com"))
      songUrl = songUrl.replace("m.soundcloud.com", "soundcloud.com");
    if (!songUrl.includes("soundcloud.com"))
      songUrl = `https://soundcloud.com/${songUrl}`;
    const html = await axios.get(songUrl, { headers });
    const match = html.data.match(/(?<=,{"url":")(.*?)(progressive)/)?.[0];
    let url: string;
    const connect = match.includes("secret_token")
      ? `&client_id=${this.api.clientID}`
      : `?client_id=${this.api.clientID}`;
    if (match) {
      url = await axios
        .get(match + connect, { headers })
        .then((r) => r.data.url)
        .catch(() => {
          return Promise.reject("client id expired");
        });
    } else {
      return null;
    }
    return url;
  };

  /**
   * Downloads the mp3 stream of a track as readable stream.
   */
  private downloadTrackReadableStream = async (
    songUrl: string
  ): Promise<stream.Readable> => {
    const headers = {
      referer: "soundcloud.com",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    };
    if (songUrl.includes("m.soundcloud.com"))
      songUrl = songUrl.replace("m.soundcloud.com", "soundcloud.com");
    if (!songUrl.includes("soundcloud.com"))
      songUrl = `https://soundcloud.com/${songUrl}`;
    const html = await axios.get(songUrl, { headers });
    // const match = html.data.match(/(?<="transcodings":\[{"url":")(.*?)(?=")/)?.[0]
    const match = html.data.match(/(?<=,{"url":")(.*?)(progressive)/)?.[0];
    let url: string;
    const connect = match.includes("secret_token")
      ? `&client_id=${this.api.clientID}`
      : `?client_id=${this.api.clientID}`;
    if (match) {
      url = await axios
        .get(match + connect, { headers })
        .then((r) => r.data.url)
        .catch(() => {
          return Promise.reject("client id expired");
        });
    } else {
      return null;
    }
    const readable = await axios
      .get(url, { headers, responseType: "stream" })
      .then((r) => r.data);
    return readable;
  };

  /**
   * Utility for awaiting a stream.Writable
   */
  private readonly awaitStream = async (writeStream: stream.Writable) => {
    return new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });
  };

  /**
   * Removes a directory recursively
   */
}
