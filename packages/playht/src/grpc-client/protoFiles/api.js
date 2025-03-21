/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.playht = (function() {

    /**
     * Namespace playht.
     * @exports playht
     * @namespace
     */
    var playht = {};

    playht.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof playht
         * @namespace
         */
        var v1 = {};

        /**
         * Quality enum.
         * @name playht.v1.Quality
         * @enum {number}
         * @property {number} QUALITY_UNSPECIFIED=0 QUALITY_UNSPECIFIED value
         * @property {number} QUALITY_LOW=1 QUALITY_LOW value
         * @property {number} QUALITY_DRAFT=2 QUALITY_DRAFT value
         * @property {number} QUALITY_MEDIUM=3 QUALITY_MEDIUM value
         * @property {number} QUALITY_HIGH=4 QUALITY_HIGH value
         * @property {number} QUALITY_PREMIUM=5 QUALITY_PREMIUM value
         */
        v1.Quality = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "QUALITY_UNSPECIFIED"] = 0;
            values[valuesById[1] = "QUALITY_LOW"] = 1;
            values[valuesById[2] = "QUALITY_DRAFT"] = 2;
            values[valuesById[3] = "QUALITY_MEDIUM"] = 3;
            values[valuesById[4] = "QUALITY_HIGH"] = 4;
            values[valuesById[5] = "QUALITY_PREMIUM"] = 5;
            return values;
        })();

        /**
         * Code enum.
         * @name playht.v1.Code
         * @enum {number}
         * @property {number} CODE_UNSPECIFIED=0 CODE_UNSPECIFIED value
         * @property {number} CODE_COMPLETE=1 CODE_COMPLETE value
         * @property {number} CODE_IN_PROGRESS=2 CODE_IN_PROGRESS value
         * @property {number} CODE_CANCELED=3 CODE_CANCELED value
         * @property {number} CODE_ERROR=4 CODE_ERROR value
         */
        v1.Code = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CODE_UNSPECIFIED"] = 0;
            values[valuesById[1] = "CODE_COMPLETE"] = 1;
            values[valuesById[2] = "CODE_IN_PROGRESS"] = 2;
            values[valuesById[3] = "CODE_CANCELED"] = 3;
            values[valuesById[4] = "CODE_ERROR"] = 4;
            return values;
        })();

        /**
         * Format enum.
         * @name playht.v1.Format
         * @enum {number}
         * @property {number} FORMAT_RAW=0 FORMAT_RAW value
         * @property {number} FORMAT_MP3=1 FORMAT_MP3 value
         * @property {number} FORMAT_WAV=2 FORMAT_WAV value
         * @property {number} FORMAT_OGG=3 FORMAT_OGG value
         * @property {number} FORMAT_FLAC=4 FORMAT_FLAC value
         * @property {number} FORMAT_MULAW=5 FORMAT_MULAW value
         */
        v1.Format = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FORMAT_RAW"] = 0;
            values[valuesById[1] = "FORMAT_MP3"] = 1;
            values[valuesById[2] = "FORMAT_WAV"] = 2;
            values[valuesById[3] = "FORMAT_OGG"] = 3;
            values[valuesById[4] = "FORMAT_FLAC"] = 4;
            values[valuesById[5] = "FORMAT_MULAW"] = 5;
            return values;
        })();

        v1.Credentials = (function() {

            /**
             * Properties of a Credentials.
             * @memberof playht.v1
             * @interface ICredentials
             * @property {string|null} [id] Credentials id
             * @property {Uint8Array|null} [token] Credentials token
             */

            /**
             * Constructs a new Credentials.
             * @memberof playht.v1
             * @classdesc Represents a Credentials.
             * @implements ICredentials
             * @constructor
             * @param {playht.v1.ICredentials=} [properties] Properties to set
             */
            function Credentials(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Credentials id.
             * @member {string} id
             * @memberof playht.v1.Credentials
             * @instance
             */
            Credentials.prototype.id = "";

            /**
             * Credentials token.
             * @member {Uint8Array} token
             * @memberof playht.v1.Credentials
             * @instance
             */
            Credentials.prototype.token = $util.newBuffer([]);

            /**
             * Creates a new Credentials instance using the specified properties.
             * @function create
             * @memberof playht.v1.Credentials
             * @static
             * @param {playht.v1.ICredentials=} [properties] Properties to set
             * @returns {playht.v1.Credentials} Credentials instance
             */
            Credentials.create = function create(properties) {
                return new Credentials(properties);
            };

            /**
             * Encodes the specified Credentials message. Does not implicitly {@link playht.v1.Credentials.verify|verify} messages.
             * @function encode
             * @memberof playht.v1.Credentials
             * @static
             * @param {playht.v1.ICredentials} message Credentials message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Credentials.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
                return writer;
            };

            /**
             * Encodes the specified Credentials message, length delimited. Does not implicitly {@link playht.v1.Credentials.verify|verify} messages.
             * @function encodeDelimited
             * @memberof playht.v1.Credentials
             * @static
             * @param {playht.v1.ICredentials} message Credentials message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Credentials.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Credentials message from the specified reader or buffer.
             * @function decode
             * @memberof playht.v1.Credentials
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {playht.v1.Credentials} Credentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Credentials.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playht.v1.Credentials();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.token = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Credentials message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof playht.v1.Credentials
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {playht.v1.Credentials} Credentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Credentials.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Credentials message.
             * @function verify
             * @memberof playht.v1.Credentials
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Credentials.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                return null;
            };

            /**
             * Creates a Credentials message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof playht.v1.Credentials
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {playht.v1.Credentials} Credentials
             */
            Credentials.fromObject = function fromObject(object) {
                if (object instanceof $root.playht.v1.Credentials)
                    return object;
                var message = new $root.playht.v1.Credentials();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length >= 0)
                        message.token = object.token;
                return message;
            };

            /**
             * Creates a plain object from a Credentials message. Also converts values to other types if specified.
             * @function toObject
             * @memberof playht.v1.Credentials
             * @static
             * @param {playht.v1.Credentials} message Credentials
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Credentials.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    if (options.bytes === String)
                        object.token = "";
                    else {
                        object.token = [];
                        if (options.bytes !== Array)
                            object.token = $util.newBuffer(object.token);
                    }
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
                return object;
            };

            /**
             * Converts this Credentials to JSON.
             * @function toJSON
             * @memberof playht.v1.Credentials
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Credentials.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Credentials
             * @function getTypeUrl
             * @memberof playht.v1.Credentials
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Credentials.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/playht.v1.Credentials";
            };

            return Credentials;
        })();

        v1.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof playht.v1
             * @interface IStatus
             * @property {playht.v1.Code|null} [code] Status code
             * @property {Array.<string>|null} [message] Status message
             */

            /**
             * Constructs a new Status.
             * @memberof playht.v1
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {playht.v1.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                this.message = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status code.
             * @member {playht.v1.Code} code
             * @memberof playht.v1.Status
             * @instance
             */
            Status.prototype.code = 0;

            /**
             * Status message.
             * @member {Array.<string>} message
             * @memberof playht.v1.Status
             * @instance
             */
            Status.prototype.message = $util.emptyArray;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof playht.v1.Status
             * @static
             * @param {playht.v1.IStatus=} [properties] Properties to set
             * @returns {playht.v1.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link playht.v1.Status.verify|verify} messages.
             * @function encode
             * @memberof playht.v1.Status
             * @static
             * @param {playht.v1.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.message.length)
                    for (var i = 0; i < message.message.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message[i]);
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link playht.v1.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof playht.v1.Status
             * @static
             * @param {playht.v1.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof playht.v1.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {playht.v1.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playht.v1.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.message && message.message.length))
                                message.message = [];
                            message.message.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof playht.v1.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {playht.v1.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof playht.v1.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message")) {
                    if (!Array.isArray(message.message))
                        return "message: array expected";
                    for (var i = 0; i < message.message.length; ++i)
                        if (!$util.isString(message.message[i]))
                            return "message: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof playht.v1.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {playht.v1.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.playht.v1.Status)
                    return object;
                var message = new $root.playht.v1.Status();
                switch (object.code) {
                default:
                    if (typeof object.code === "number") {
                        message.code = object.code;
                        break;
                    }
                    break;
                case "CODE_UNSPECIFIED":
                case 0:
                    message.code = 0;
                    break;
                case "CODE_COMPLETE":
                case 1:
                    message.code = 1;
                    break;
                case "CODE_IN_PROGRESS":
                case 2:
                    message.code = 2;
                    break;
                case "CODE_CANCELED":
                case 3:
                    message.code = 3;
                    break;
                case "CODE_ERROR":
                case 4:
                    message.code = 4;
                    break;
                }
                if (object.message) {
                    if (!Array.isArray(object.message))
                        throw TypeError(".playht.v1.Status.message: array expected");
                    message.message = [];
                    for (var i = 0; i < object.message.length; ++i)
                        message.message[i] = String(object.message[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof playht.v1.Status
             * @static
             * @param {playht.v1.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.message = [];
                if (options.defaults)
                    object.code = options.enums === String ? "CODE_UNSPECIFIED" : 0;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.playht.v1.Code[message.code] === undefined ? message.code : $root.playht.v1.Code[message.code] : message.code;
                if (message.message && message.message.length) {
                    object.message = [];
                    for (var j = 0; j < message.message.length; ++j)
                        object.message[j] = message.message[j];
                }
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof playht.v1.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Status
             * @function getTypeUrl
             * @memberof playht.v1.Status
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/playht.v1.Status";
            };

            return Status;
        })();

        v1.TtsParams = (function() {

            /**
             * Properties of a TtsParams.
             * @memberof playht.v1
             * @interface ITtsParams
             * @property {Array.<string>|null} [text] TtsParams text
             * @property {string|null} [voice] TtsParams voice
             * @property {playht.v1.Quality|null} [quality] TtsParams quality
             * @property {playht.v1.Format|null} [format] TtsParams format
             * @property {number|null} [sampleRate] TtsParams sampleRate
             * @property {number|null} [speed] TtsParams speed
             * @property {number|null} [seed] TtsParams seed
             * @property {number|null} [temperature] TtsParams temperature
             * @property {number|null} [topP] TtsParams topP
             * @property {number|null} [styleGuidance] TtsParams styleGuidance
             * @property {number|null} [voiceGuidance] TtsParams voiceGuidance
             * @property {number|null} [audioSource] TtsParams audioSource
             * @property {number|null} [speakerAttributes] TtsParams speakerAttributes
             * @property {number|null} [speechAttributes] TtsParams speechAttributes
             * @property {number|null} [languageIdentifier] TtsParams languageIdentifier
             * @property {number|null} [textGuidance] TtsParams textGuidance
             * @property {string|null} [other] TtsParams other
             */

            /**
             * Constructs a new TtsParams.
             * @memberof playht.v1
             * @classdesc Represents a TtsParams.
             * @implements ITtsParams
             * @constructor
             * @param {playht.v1.ITtsParams=} [properties] Properties to set
             */
            function TtsParams(properties) {
                this.text = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TtsParams text.
             * @member {Array.<string>} text
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.text = $util.emptyArray;

            /**
             * TtsParams voice.
             * @member {string} voice
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.voice = "";

            /**
             * TtsParams quality.
             * @member {playht.v1.Quality|null|undefined} quality
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.quality = null;

            /**
             * TtsParams format.
             * @member {playht.v1.Format|null|undefined} format
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.format = null;

            /**
             * TtsParams sampleRate.
             * @member {number|null|undefined} sampleRate
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.sampleRate = null;

            /**
             * TtsParams speed.
             * @member {number|null|undefined} speed
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.speed = null;

            /**
             * TtsParams seed.
             * @member {number|null|undefined} seed
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.seed = null;

            /**
             * TtsParams temperature.
             * @member {number|null|undefined} temperature
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.temperature = null;

            /**
             * TtsParams topP.
             * @member {number|null|undefined} topP
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.topP = null;

            /**
             * TtsParams styleGuidance.
             * @member {number|null|undefined} styleGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.styleGuidance = null;

            /**
             * TtsParams voiceGuidance.
             * @member {number|null|undefined} voiceGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.voiceGuidance = null;

            /**
             * TtsParams audioSource.
             * @member {number|null|undefined} audioSource
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.audioSource = null;

            /**
             * TtsParams speakerAttributes.
             * @member {number|null|undefined} speakerAttributes
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.speakerAttributes = null;

            /**
             * TtsParams speechAttributes.
             * @member {number|null|undefined} speechAttributes
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.speechAttributes = null;

            /**
             * TtsParams languageIdentifier.
             * @member {number|null|undefined} languageIdentifier
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.languageIdentifier = null;

            /**
             * TtsParams textGuidance.
             * @member {number|null|undefined} textGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.textGuidance = null;

            /**
             * TtsParams other.
             * @member {string|null|undefined} other
             * @memberof playht.v1.TtsParams
             * @instance
             */
            TtsParams.prototype.other = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TtsParams _quality.
             * @member {"quality"|undefined} _quality
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_quality", {
                get: $util.oneOfGetter($oneOfFields = ["quality"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _format.
             * @member {"format"|undefined} _format
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_format", {
                get: $util.oneOfGetter($oneOfFields = ["format"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _sampleRate.
             * @member {"sampleRate"|undefined} _sampleRate
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_sampleRate", {
                get: $util.oneOfGetter($oneOfFields = ["sampleRate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _speed.
             * @member {"speed"|undefined} _speed
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_speed", {
                get: $util.oneOfGetter($oneOfFields = ["speed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _seed.
             * @member {"seed"|undefined} _seed
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _temperature.
             * @member {"temperature"|undefined} _temperature
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_temperature", {
                get: $util.oneOfGetter($oneOfFields = ["temperature"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _topP.
             * @member {"topP"|undefined} _topP
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_topP", {
                get: $util.oneOfGetter($oneOfFields = ["topP"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _styleGuidance.
             * @member {"styleGuidance"|undefined} _styleGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_styleGuidance", {
                get: $util.oneOfGetter($oneOfFields = ["styleGuidance"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _voiceGuidance.
             * @member {"voiceGuidance"|undefined} _voiceGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_voiceGuidance", {
                get: $util.oneOfGetter($oneOfFields = ["voiceGuidance"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _audioSource.
             * @member {"audioSource"|undefined} _audioSource
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_audioSource", {
                get: $util.oneOfGetter($oneOfFields = ["audioSource"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _speakerAttributes.
             * @member {"speakerAttributes"|undefined} _speakerAttributes
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_speakerAttributes", {
                get: $util.oneOfGetter($oneOfFields = ["speakerAttributes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _speechAttributes.
             * @member {"speechAttributes"|undefined} _speechAttributes
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_speechAttributes", {
                get: $util.oneOfGetter($oneOfFields = ["speechAttributes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _languageIdentifier.
             * @member {"languageIdentifier"|undefined} _languageIdentifier
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_languageIdentifier", {
                get: $util.oneOfGetter($oneOfFields = ["languageIdentifier"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _textGuidance.
             * @member {"textGuidance"|undefined} _textGuidance
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_textGuidance", {
                get: $util.oneOfGetter($oneOfFields = ["textGuidance"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TtsParams _other.
             * @member {"other"|undefined} _other
             * @memberof playht.v1.TtsParams
             * @instance
             */
            Object.defineProperty(TtsParams.prototype, "_other", {
                get: $util.oneOfGetter($oneOfFields = ["other"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TtsParams instance using the specified properties.
             * @function create
             * @memberof playht.v1.TtsParams
             * @static
             * @param {playht.v1.ITtsParams=} [properties] Properties to set
             * @returns {playht.v1.TtsParams} TtsParams instance
             */
            TtsParams.create = function create(properties) {
                return new TtsParams(properties);
            };

            /**
             * Encodes the specified TtsParams message. Does not implicitly {@link playht.v1.TtsParams.verify|verify} messages.
             * @function encode
             * @memberof playht.v1.TtsParams
             * @static
             * @param {playht.v1.ITtsParams} message TtsParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsParams.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.text.length)
                    for (var i = 0; i < message.text.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text[i]);
                if (message.voice != null && Object.hasOwnProperty.call(message, "voice"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.voice);
                if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.quality);
                if (message.format != null && Object.hasOwnProperty.call(message, "format"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.format);
                if (message.sampleRate != null && Object.hasOwnProperty.call(message, "sampleRate"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sampleRate);
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.speed);
                if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.seed);
                if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
                    writer.uint32(/* id 8, wireType 5 =*/69).float(message.temperature);
                if (message.topP != null && Object.hasOwnProperty.call(message, "topP"))
                    writer.uint32(/* id 9, wireType 5 =*/77).float(message.topP);
                if (message.styleGuidance != null && Object.hasOwnProperty.call(message, "styleGuidance"))
                    writer.uint32(/* id 10, wireType 5 =*/85).float(message.styleGuidance);
                if (message.voiceGuidance != null && Object.hasOwnProperty.call(message, "voiceGuidance"))
                    writer.uint32(/* id 11, wireType 5 =*/93).float(message.voiceGuidance);
                if (message.audioSource != null && Object.hasOwnProperty.call(message, "audioSource"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.audioSource);
                if (message.speakerAttributes != null && Object.hasOwnProperty.call(message, "speakerAttributes"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.speakerAttributes);
                if (message.speechAttributes != null && Object.hasOwnProperty.call(message, "speechAttributes"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.speechAttributes);
                if (message.languageIdentifier != null && Object.hasOwnProperty.call(message, "languageIdentifier"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.languageIdentifier);
                if (message.textGuidance != null && Object.hasOwnProperty.call(message, "textGuidance"))
                    writer.uint32(/* id 16, wireType 5 =*/133).float(message.textGuidance);
                if (message.other != null && Object.hasOwnProperty.call(message, "other"))
                    writer.uint32(/* id 99, wireType 2 =*/794).string(message.other);
                return writer;
            };

            /**
             * Encodes the specified TtsParams message, length delimited. Does not implicitly {@link playht.v1.TtsParams.verify|verify} messages.
             * @function encodeDelimited
             * @memberof playht.v1.TtsParams
             * @static
             * @param {playht.v1.ITtsParams} message TtsParams message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsParams.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TtsParams message from the specified reader or buffer.
             * @function decode
             * @memberof playht.v1.TtsParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {playht.v1.TtsParams} TtsParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsParams.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playht.v1.TtsParams();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.text && message.text.length))
                                message.text = [];
                            message.text.push(reader.string());
                            break;
                        }
                    case 2: {
                            message.voice = reader.string();
                            break;
                        }
                    case 3: {
                            message.quality = reader.int32();
                            break;
                        }
                    case 4: {
                            message.format = reader.int32();
                            break;
                        }
                    case 5: {
                            message.sampleRate = reader.int32();
                            break;
                        }
                    case 6: {
                            message.speed = reader.float();
                            break;
                        }
                    case 7: {
                            message.seed = reader.int32();
                            break;
                        }
                    case 8: {
                            message.temperature = reader.float();
                            break;
                        }
                    case 9: {
                            message.topP = reader.float();
                            break;
                        }
                    case 10: {
                            message.styleGuidance = reader.float();
                            break;
                        }
                    case 11: {
                            message.voiceGuidance = reader.float();
                            break;
                        }
                    case 12: {
                            message.audioSource = reader.int32();
                            break;
                        }
                    case 13: {
                            message.speakerAttributes = reader.int32();
                            break;
                        }
                    case 14: {
                            message.speechAttributes = reader.int32();
                            break;
                        }
                    case 15: {
                            message.languageIdentifier = reader.int32();
                            break;
                        }
                    case 16: {
                            message.textGuidance = reader.float();
                            break;
                        }
                    case 99: {
                            message.other = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TtsParams message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof playht.v1.TtsParams
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {playht.v1.TtsParams} TtsParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsParams.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TtsParams message.
             * @function verify
             * @memberof playht.v1.TtsParams
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TtsParams.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.text != null && message.hasOwnProperty("text")) {
                    if (!Array.isArray(message.text))
                        return "text: array expected";
                    for (var i = 0; i < message.text.length; ++i)
                        if (!$util.isString(message.text[i]))
                            return "text: string[] expected";
                }
                if (message.voice != null && message.hasOwnProperty("voice"))
                    if (!$util.isString(message.voice))
                        return "voice: string expected";
                if (message.quality != null && message.hasOwnProperty("quality")) {
                    properties._quality = 1;
                    switch (message.quality) {
                    default:
                        return "quality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                }
                if (message.format != null && message.hasOwnProperty("format")) {
                    properties._format = 1;
                    switch (message.format) {
                    default:
                        return "format: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                }
                if (message.sampleRate != null && message.hasOwnProperty("sampleRate")) {
                    properties._sampleRate = 1;
                    if (!$util.isInteger(message.sampleRate))
                        return "sampleRate: integer expected";
                }
                if (message.speed != null && message.hasOwnProperty("speed")) {
                    properties._speed = 1;
                    if (typeof message.speed !== "number")
                        return "speed: number expected";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    properties._seed = 1;
                    if (!$util.isInteger(message.seed))
                        return "seed: integer expected";
                }
                if (message.temperature != null && message.hasOwnProperty("temperature")) {
                    properties._temperature = 1;
                    if (typeof message.temperature !== "number")
                        return "temperature: number expected";
                }
                if (message.topP != null && message.hasOwnProperty("topP")) {
                    properties._topP = 1;
                    if (typeof message.topP !== "number")
                        return "topP: number expected";
                }
                if (message.styleGuidance != null && message.hasOwnProperty("styleGuidance")) {
                    properties._styleGuidance = 1;
                    if (typeof message.styleGuidance !== "number")
                        return "styleGuidance: number expected";
                }
                if (message.voiceGuidance != null && message.hasOwnProperty("voiceGuidance")) {
                    properties._voiceGuidance = 1;
                    if (typeof message.voiceGuidance !== "number")
                        return "voiceGuidance: number expected";
                }
                if (message.audioSource != null && message.hasOwnProperty("audioSource")) {
                    properties._audioSource = 1;
                    if (!$util.isInteger(message.audioSource))
                        return "audioSource: integer expected";
                }
                if (message.speakerAttributes != null && message.hasOwnProperty("speakerAttributes")) {
                    properties._speakerAttributes = 1;
                    if (!$util.isInteger(message.speakerAttributes))
                        return "speakerAttributes: integer expected";
                }
                if (message.speechAttributes != null && message.hasOwnProperty("speechAttributes")) {
                    properties._speechAttributes = 1;
                    if (!$util.isInteger(message.speechAttributes))
                        return "speechAttributes: integer expected";
                }
                if (message.languageIdentifier != null && message.hasOwnProperty("languageIdentifier")) {
                    properties._languageIdentifier = 1;
                    if (!$util.isInteger(message.languageIdentifier))
                        return "languageIdentifier: integer expected";
                }
                if (message.textGuidance != null && message.hasOwnProperty("textGuidance")) {
                    properties._textGuidance = 1;
                    if (typeof message.textGuidance !== "number")
                        return "textGuidance: number expected";
                }
                if (message.other != null && message.hasOwnProperty("other")) {
                    properties._other = 1;
                    if (!$util.isString(message.other))
                        return "other: string expected";
                }
                return null;
            };

            /**
             * Creates a TtsParams message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof playht.v1.TtsParams
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {playht.v1.TtsParams} TtsParams
             */
            TtsParams.fromObject = function fromObject(object) {
                if (object instanceof $root.playht.v1.TtsParams)
                    return object;
                var message = new $root.playht.v1.TtsParams();
                if (object.text) {
                    if (!Array.isArray(object.text))
                        throw TypeError(".playht.v1.TtsParams.text: array expected");
                    message.text = [];
                    for (var i = 0; i < object.text.length; ++i)
                        message.text[i] = String(object.text[i]);
                }
                if (object.voice != null)
                    message.voice = String(object.voice);
                switch (object.quality) {
                default:
                    if (typeof object.quality === "number") {
                        message.quality = object.quality;
                        break;
                    }
                    break;
                case "QUALITY_UNSPECIFIED":
                case 0:
                    message.quality = 0;
                    break;
                case "QUALITY_LOW":
                case 1:
                    message.quality = 1;
                    break;
                case "QUALITY_DRAFT":
                case 2:
                    message.quality = 2;
                    break;
                case "QUALITY_MEDIUM":
                case 3:
                    message.quality = 3;
                    break;
                case "QUALITY_HIGH":
                case 4:
                    message.quality = 4;
                    break;
                case "QUALITY_PREMIUM":
                case 5:
                    message.quality = 5;
                    break;
                }
                switch (object.format) {
                default:
                    if (typeof object.format === "number") {
                        message.format = object.format;
                        break;
                    }
                    break;
                case "FORMAT_RAW":
                case 0:
                    message.format = 0;
                    break;
                case "FORMAT_MP3":
                case 1:
                    message.format = 1;
                    break;
                case "FORMAT_WAV":
                case 2:
                    message.format = 2;
                    break;
                case "FORMAT_OGG":
                case 3:
                    message.format = 3;
                    break;
                case "FORMAT_FLAC":
                case 4:
                    message.format = 4;
                    break;
                case "FORMAT_MULAW":
                case 5:
                    message.format = 5;
                    break;
                }
                if (object.sampleRate != null)
                    message.sampleRate = object.sampleRate | 0;
                if (object.speed != null)
                    message.speed = Number(object.speed);
                if (object.seed != null)
                    message.seed = object.seed | 0;
                if (object.temperature != null)
                    message.temperature = Number(object.temperature);
                if (object.topP != null)
                    message.topP = Number(object.topP);
                if (object.styleGuidance != null)
                    message.styleGuidance = Number(object.styleGuidance);
                if (object.voiceGuidance != null)
                    message.voiceGuidance = Number(object.voiceGuidance);
                if (object.audioSource != null)
                    message.audioSource = object.audioSource | 0;
                if (object.speakerAttributes != null)
                    message.speakerAttributes = object.speakerAttributes | 0;
                if (object.speechAttributes != null)
                    message.speechAttributes = object.speechAttributes | 0;
                if (object.languageIdentifier != null)
                    message.languageIdentifier = object.languageIdentifier | 0;
                if (object.textGuidance != null)
                    message.textGuidance = Number(object.textGuidance);
                if (object.other != null)
                    message.other = String(object.other);
                return message;
            };

            /**
             * Creates a plain object from a TtsParams message. Also converts values to other types if specified.
             * @function toObject
             * @memberof playht.v1.TtsParams
             * @static
             * @param {playht.v1.TtsParams} message TtsParams
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TtsParams.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.text = [];
                if (options.defaults)
                    object.voice = "";
                if (message.text && message.text.length) {
                    object.text = [];
                    for (var j = 0; j < message.text.length; ++j)
                        object.text[j] = message.text[j];
                }
                if (message.voice != null && message.hasOwnProperty("voice"))
                    object.voice = message.voice;
                if (message.quality != null && message.hasOwnProperty("quality")) {
                    object.quality = options.enums === String ? $root.playht.v1.Quality[message.quality] === undefined ? message.quality : $root.playht.v1.Quality[message.quality] : message.quality;
                    if (options.oneofs)
                        object._quality = "quality";
                }
                if (message.format != null && message.hasOwnProperty("format")) {
                    object.format = options.enums === String ? $root.playht.v1.Format[message.format] === undefined ? message.format : $root.playht.v1.Format[message.format] : message.format;
                    if (options.oneofs)
                        object._format = "format";
                }
                if (message.sampleRate != null && message.hasOwnProperty("sampleRate")) {
                    object.sampleRate = message.sampleRate;
                    if (options.oneofs)
                        object._sampleRate = "sampleRate";
                }
                if (message.speed != null && message.hasOwnProperty("speed")) {
                    object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
                    if (options.oneofs)
                        object._speed = "speed";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    object.seed = message.seed;
                    if (options.oneofs)
                        object._seed = "seed";
                }
                if (message.temperature != null && message.hasOwnProperty("temperature")) {
                    object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
                    if (options.oneofs)
                        object._temperature = "temperature";
                }
                if (message.topP != null && message.hasOwnProperty("topP")) {
                    object.topP = options.json && !isFinite(message.topP) ? String(message.topP) : message.topP;
                    if (options.oneofs)
                        object._topP = "topP";
                }
                if (message.styleGuidance != null && message.hasOwnProperty("styleGuidance")) {
                    object.styleGuidance = options.json && !isFinite(message.styleGuidance) ? String(message.styleGuidance) : message.styleGuidance;
                    if (options.oneofs)
                        object._styleGuidance = "styleGuidance";
                }
                if (message.voiceGuidance != null && message.hasOwnProperty("voiceGuidance")) {
                    object.voiceGuidance = options.json && !isFinite(message.voiceGuidance) ? String(message.voiceGuidance) : message.voiceGuidance;
                    if (options.oneofs)
                        object._voiceGuidance = "voiceGuidance";
                }
                if (message.audioSource != null && message.hasOwnProperty("audioSource")) {
                    object.audioSource = message.audioSource;
                    if (options.oneofs)
                        object._audioSource = "audioSource";
                }
                if (message.speakerAttributes != null && message.hasOwnProperty("speakerAttributes")) {
                    object.speakerAttributes = message.speakerAttributes;
                    if (options.oneofs)
                        object._speakerAttributes = "speakerAttributes";
                }
                if (message.speechAttributes != null && message.hasOwnProperty("speechAttributes")) {
                    object.speechAttributes = message.speechAttributes;
                    if (options.oneofs)
                        object._speechAttributes = "speechAttributes";
                }
                if (message.languageIdentifier != null && message.hasOwnProperty("languageIdentifier")) {
                    object.languageIdentifier = message.languageIdentifier;
                    if (options.oneofs)
                        object._languageIdentifier = "languageIdentifier";
                }
                if (message.textGuidance != null && message.hasOwnProperty("textGuidance")) {
                    object.textGuidance = options.json && !isFinite(message.textGuidance) ? String(message.textGuidance) : message.textGuidance;
                    if (options.oneofs)
                        object._textGuidance = "textGuidance";
                }
                if (message.other != null && message.hasOwnProperty("other")) {
                    object.other = message.other;
                    if (options.oneofs)
                        object._other = "other";
                }
                return object;
            };

            /**
             * Converts this TtsParams to JSON.
             * @function toJSON
             * @memberof playht.v1.TtsParams
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TtsParams.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TtsParams
             * @function getTypeUrl
             * @memberof playht.v1.TtsParams
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TtsParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/playht.v1.TtsParams";
            };

            return TtsParams;
        })();

        v1.Tts = (function() {

            /**
             * Constructs a new Tts service.
             * @memberof playht.v1
             * @classdesc Represents a Tts
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Tts(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (Tts.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Tts;

            /**
             * Creates new Tts service using the specified rpc implementation.
             * @function create
             * @memberof playht.v1.Tts
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {Tts} RPC service. Useful where requests and/or responses are streamed.
             */
            Tts.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link playht.v1.Tts#tts}.
             * @memberof playht.v1.Tts
             * @typedef TtsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {playht.v1.TtsResponse} [response] TtsResponse
             */

            /**
             * Calls Tts.
             * @function tts
             * @memberof playht.v1.Tts
             * @instance
             * @param {playht.v1.ITtsRequest} request TtsRequest message or plain object
             * @param {playht.v1.Tts.TtsCallback} callback Node-style callback called with the error, if any, and TtsResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(Tts.prototype.tts = function tts(request, callback) {
                return this.rpcCall(tts, $root.playht.v1.TtsRequest, $root.playht.v1.TtsResponse, request, callback);
            }, "name", { value: "Tts" });

            /**
             * Calls Tts.
             * @function tts
             * @memberof playht.v1.Tts
             * @instance
             * @param {playht.v1.ITtsRequest} request TtsRequest message or plain object
             * @returns {Promise<playht.v1.TtsResponse>} Promise
             * @variation 2
             */

            return Tts;
        })();

        v1.TtsRequest = (function() {

            /**
             * Properties of a TtsRequest.
             * @memberof playht.v1
             * @interface ITtsRequest
             * @property {Uint8Array|null} [lease] TtsRequest lease
             * @property {playht.v1.ITtsParams|null} [params] TtsRequest params
             */

            /**
             * Constructs a new TtsRequest.
             * @memberof playht.v1
             * @classdesc Represents a TtsRequest.
             * @implements ITtsRequest
             * @constructor
             * @param {playht.v1.ITtsRequest=} [properties] Properties to set
             */
            function TtsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TtsRequest lease.
             * @member {Uint8Array} lease
             * @memberof playht.v1.TtsRequest
             * @instance
             */
            TtsRequest.prototype.lease = $util.newBuffer([]);

            /**
             * TtsRequest params.
             * @member {playht.v1.ITtsParams|null|undefined} params
             * @memberof playht.v1.TtsRequest
             * @instance
             */
            TtsRequest.prototype.params = null;

            /**
             * Creates a new TtsRequest instance using the specified properties.
             * @function create
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {playht.v1.ITtsRequest=} [properties] Properties to set
             * @returns {playht.v1.TtsRequest} TtsRequest instance
             */
            TtsRequest.create = function create(properties) {
                return new TtsRequest(properties);
            };

            /**
             * Encodes the specified TtsRequest message. Does not implicitly {@link playht.v1.TtsRequest.verify|verify} messages.
             * @function encode
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {playht.v1.ITtsRequest} message TtsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.lease != null && Object.hasOwnProperty.call(message, "lease"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.lease);
                if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                    $root.playht.v1.TtsParams.encode(message.params, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TtsRequest message, length delimited. Does not implicitly {@link playht.v1.TtsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {playht.v1.ITtsRequest} message TtsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TtsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {playht.v1.TtsRequest} TtsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playht.v1.TtsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.lease = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.params = $root.playht.v1.TtsParams.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TtsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {playht.v1.TtsRequest} TtsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TtsRequest message.
             * @function verify
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TtsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.lease != null && message.hasOwnProperty("lease"))
                    if (!(message.lease && typeof message.lease.length === "number" || $util.isString(message.lease)))
                        return "lease: buffer expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    var error = $root.playht.v1.TtsParams.verify(message.params);
                    if (error)
                        return "params." + error;
                }
                return null;
            };

            /**
             * Creates a TtsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {playht.v1.TtsRequest} TtsRequest
             */
            TtsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.playht.v1.TtsRequest)
                    return object;
                var message = new $root.playht.v1.TtsRequest();
                if (object.lease != null)
                    if (typeof object.lease === "string")
                        $util.base64.decode(object.lease, message.lease = $util.newBuffer($util.base64.length(object.lease)), 0);
                    else if (object.lease.length >= 0)
                        message.lease = object.lease;
                if (object.params != null) {
                    if (typeof object.params !== "object")
                        throw TypeError(".playht.v1.TtsRequest.params: object expected");
                    message.params = $root.playht.v1.TtsParams.fromObject(object.params);
                }
                return message;
            };

            /**
             * Creates a plain object from a TtsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {playht.v1.TtsRequest} message TtsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TtsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.lease = "";
                    else {
                        object.lease = [];
                        if (options.bytes !== Array)
                            object.lease = $util.newBuffer(object.lease);
                    }
                    object.params = null;
                }
                if (message.lease != null && message.hasOwnProperty("lease"))
                    object.lease = options.bytes === String ? $util.base64.encode(message.lease, 0, message.lease.length) : options.bytes === Array ? Array.prototype.slice.call(message.lease) : message.lease;
                if (message.params != null && message.hasOwnProperty("params"))
                    object.params = $root.playht.v1.TtsParams.toObject(message.params, options);
                return object;
            };

            /**
             * Converts this TtsRequest to JSON.
             * @function toJSON
             * @memberof playht.v1.TtsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TtsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TtsRequest
             * @function getTypeUrl
             * @memberof playht.v1.TtsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TtsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/playht.v1.TtsRequest";
            };

            return TtsRequest;
        })();

        v1.TtsResponse = (function() {

            /**
             * Properties of a TtsResponse.
             * @memberof playht.v1
             * @interface ITtsResponse
             * @property {number|null} [sequence] TtsResponse sequence
             * @property {string|null} [id] TtsResponse id
             * @property {Uint8Array|null} [data] TtsResponse data
             * @property {playht.v1.IStatus|null} [status] TtsResponse status
             */

            /**
             * Constructs a new TtsResponse.
             * @memberof playht.v1
             * @classdesc Represents a TtsResponse.
             * @implements ITtsResponse
             * @constructor
             * @param {playht.v1.ITtsResponse=} [properties] Properties to set
             */
            function TtsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TtsResponse sequence.
             * @member {number} sequence
             * @memberof playht.v1.TtsResponse
             * @instance
             */
            TtsResponse.prototype.sequence = 0;

            /**
             * TtsResponse id.
             * @member {string} id
             * @memberof playht.v1.TtsResponse
             * @instance
             */
            TtsResponse.prototype.id = "";

            /**
             * TtsResponse data.
             * @member {Uint8Array} data
             * @memberof playht.v1.TtsResponse
             * @instance
             */
            TtsResponse.prototype.data = $util.newBuffer([]);

            /**
             * TtsResponse status.
             * @member {playht.v1.IStatus|null|undefined} status
             * @memberof playht.v1.TtsResponse
             * @instance
             */
            TtsResponse.prototype.status = null;

            /**
             * Creates a new TtsResponse instance using the specified properties.
             * @function create
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {playht.v1.ITtsResponse=} [properties] Properties to set
             * @returns {playht.v1.TtsResponse} TtsResponse instance
             */
            TtsResponse.create = function create(properties) {
                return new TtsResponse(properties);
            };

            /**
             * Encodes the specified TtsResponse message. Does not implicitly {@link playht.v1.TtsResponse.verify|verify} messages.
             * @function encode
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {playht.v1.ITtsResponse} message TtsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sequence);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    $root.playht.v1.Status.encode(message.status, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TtsResponse message, length delimited. Does not implicitly {@link playht.v1.TtsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {playht.v1.ITtsResponse} message TtsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TtsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TtsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {playht.v1.TtsResponse} TtsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playht.v1.TtsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sequence = reader.int32();
                            break;
                        }
                    case 2: {
                            message.id = reader.string();
                            break;
                        }
                    case 3: {
                            message.data = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.status = $root.playht.v1.Status.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TtsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {playht.v1.TtsResponse} TtsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TtsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TtsResponse message.
             * @function verify
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TtsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.playht.v1.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                return null;
            };

            /**
             * Creates a TtsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {playht.v1.TtsResponse} TtsResponse
             */
            TtsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.playht.v1.TtsResponse)
                    return object;
                var message = new $root.playht.v1.TtsResponse();
                if (object.sequence != null)
                    message.sequence = object.sequence | 0;
                if (object.id != null)
                    message.id = String(object.id);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".playht.v1.TtsResponse.status: object expected");
                    message.status = $root.playht.v1.Status.fromObject(object.status);
                }
                return message;
            };

            /**
             * Creates a plain object from a TtsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {playht.v1.TtsResponse} message TtsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TtsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sequence = 0;
                    object.id = "";
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.status = null;
                }
                if (message.sequence != null && message.hasOwnProperty("sequence"))
                    object.sequence = message.sequence;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.playht.v1.Status.toObject(message.status, options);
                return object;
            };

            /**
             * Converts this TtsResponse to JSON.
             * @function toJSON
             * @memberof playht.v1.TtsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TtsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TtsResponse
             * @function getTypeUrl
             * @memberof playht.v1.TtsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TtsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/playht.v1.TtsResponse";
            };

            return TtsResponse;
        })();

        return v1;
    })();

    return playht;
})();

module.exports = $root;
