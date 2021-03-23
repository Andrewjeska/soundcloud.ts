import SoundCloud from "./soundcloud";

require("dotenv").config();
const soundcloud = new SoundCloud(process.env.SOUNDCLOUD_CLIENT_ID);
