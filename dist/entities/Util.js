"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var index_1 = require("./index");
var Util = /** @class */ (function () {
    function Util(api) {
        var _this = this;
        this.api = api;
        this.playlists = new index_1.Playlists(this.api);
        this.users = new index_1.Users(this.api);
        this.tracks = new index_1.Tracks(this.api);
        /**
         * Gets the direct streaming link of a track.
         */
        this.streamLink = function (songUrl) { return __awaiter(_this, void 0, void 0, function () {
            var headers, html, match, url, connect;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = {
                            referer: "soundcloud.com",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
                        };
                        if (songUrl.includes("m.soundcloud.com"))
                            songUrl = songUrl.replace("m.soundcloud.com", "soundcloud.com");
                        if (!songUrl.includes("soundcloud.com"))
                            songUrl = "https://soundcloud.com/" + songUrl;
                        return [4 /*yield*/, axios_1["default"].get(songUrl, { headers: headers })];
                    case 1:
                        html = _b.sent();
                        match = (_a = html.data.match(/(?<=,{"url":")(.*?)(progressive)/)) === null || _a === void 0 ? void 0 : _a[0];
                        connect = match.includes("secret_token")
                            ? "&client_id=" + this.api.clientID
                            : "?client_id=" + this.api.clientID;
                        if (!match) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios_1["default"]
                                .get(match + connect, { headers: headers })
                                .then(function (r) { return r.data.url; })["catch"](function () {
                                return Promise.reject("client id expired");
                            })];
                    case 2:
                        url = _b.sent();
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, null];
                    case 4: return [2 /*return*/, url];
                }
            });
        }); };
        /**
         * Downloads the mp3 stream of a track as readable stream.
         */
        this.downloadTrackReadableStream = function (songUrl) { return __awaiter(_this, void 0, void 0, function () {
            var headers, html, match, url, connect, readable;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = {
                            referer: "soundcloud.com",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
                        };
                        if (songUrl.includes("m.soundcloud.com"))
                            songUrl = songUrl.replace("m.soundcloud.com", "soundcloud.com");
                        if (!songUrl.includes("soundcloud.com"))
                            songUrl = "https://soundcloud.com/" + songUrl;
                        return [4 /*yield*/, axios_1["default"].get(songUrl, { headers: headers })];
                    case 1:
                        html = _b.sent();
                        match = (_a = html.data.match(/(?<=,{"url":")(.*?)(progressive)/)) === null || _a === void 0 ? void 0 : _a[0];
                        connect = match.includes("secret_token")
                            ? "&client_id=" + this.api.clientID
                            : "?client_id=" + this.api.clientID;
                        if (!match) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios_1["default"]
                                .get(match + connect, { headers: headers })
                                .then(function (r) { return r.data.url; })["catch"](function () {
                                return Promise.reject("client id expired");
                            })];
                    case 2:
                        url = _b.sent();
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, null];
                    case 4: return [4 /*yield*/, axios_1["default"]
                            .get(url, { headers: headers, responseType: "stream" })
                            .then(function (r) { return r.data; })];
                    case 5:
                        readable = _b.sent();
                        return [2 /*return*/, readable];
                }
            });
        }); };
        /**
         * Utility for awaiting a stream.Writable
         */
        this.awaitStream = function (writeStream) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        writeStream.on("finish", resolve);
                        writeStream.on("error", reject);
                    })];
            });
        }); };
    }
    return Util;
}());
exports.Util = Util;
