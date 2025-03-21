import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace playht. */
export namespace playht {

    /** Namespace v1. */
    namespace v1 {

        /** Quality enum. */
        enum Quality {
            QUALITY_UNSPECIFIED = 0,
            QUALITY_LOW = 1,
            QUALITY_DRAFT = 2,
            QUALITY_MEDIUM = 3,
            QUALITY_HIGH = 4,
            QUALITY_PREMIUM = 5
        }

        /** Code enum. */
        enum Code {
            CODE_UNSPECIFIED = 0,
            CODE_COMPLETE = 1,
            CODE_IN_PROGRESS = 2,
            CODE_CANCELED = 3,
            CODE_ERROR = 4
        }

        /** Format enum. */
        enum Format {
            FORMAT_RAW = 0,
            FORMAT_MP3 = 1,
            FORMAT_WAV = 2,
            FORMAT_OGG = 3,
            FORMAT_FLAC = 4,
            FORMAT_MULAW = 5
        }

        /** Properties of a Credentials. */
        interface ICredentials {

            /** Credentials id */
            id?: (string|null);

            /** Credentials token */
            token?: (Uint8Array|null);
        }

        /** Represents a Credentials. */
        class Credentials implements ICredentials {

            /**
             * Constructs a new Credentials.
             * @param [properties] Properties to set
             */
            constructor(properties?: playht.v1.ICredentials);

            /** Credentials id. */
            public id: string;

            /** Credentials token. */
            public token: Uint8Array;

            /**
             * Creates a new Credentials instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Credentials instance
             */
            public static create(properties?: playht.v1.ICredentials): playht.v1.Credentials;

            /**
             * Encodes the specified Credentials message. Does not implicitly {@link playht.v1.Credentials.verify|verify} messages.
             * @param message Credentials message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: playht.v1.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Credentials message, length delimited. Does not implicitly {@link playht.v1.Credentials.verify|verify} messages.
             * @param message Credentials message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: playht.v1.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Credentials message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Credentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playht.v1.Credentials;

            /**
             * Decodes a Credentials message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Credentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playht.v1.Credentials;

            /**
             * Verifies a Credentials message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Credentials message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Credentials
             */
            public static fromObject(object: { [k: string]: any }): playht.v1.Credentials;

            /**
             * Creates a plain object from a Credentials message. Also converts values to other types if specified.
             * @param message Credentials
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: playht.v1.Credentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Credentials to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Credentials
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (playht.v1.Code|null);

            /** Status message */
            message?: (string[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: playht.v1.IStatus);

            /** Status code. */
            public code: playht.v1.Code;

            /** Status message. */
            public message: string[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: playht.v1.IStatus): playht.v1.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link playht.v1.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: playht.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link playht.v1.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: playht.v1.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playht.v1.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playht.v1.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): playht.v1.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: playht.v1.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TtsParams. */
        interface ITtsParams {

            /** TtsParams text */
            text?: (string[]|null);

            /** TtsParams voice */
            voice?: (string|null);

            /** TtsParams quality */
            quality?: (playht.v1.Quality|null);

            /** TtsParams format */
            format?: (playht.v1.Format|null);

            /** TtsParams sampleRate */
            sampleRate?: (number|null);

            /** TtsParams speed */
            speed?: (number|null);

            /** TtsParams seed */
            seed?: (number|null);

            /** TtsParams temperature */
            temperature?: (number|null);

            /** TtsParams topP */
            topP?: (number|null);

            /** TtsParams styleGuidance */
            styleGuidance?: (number|null);

            /** TtsParams voiceGuidance */
            voiceGuidance?: (number|null);

            /** TtsParams audioSource */
            audioSource?: (number|null);

            /** TtsParams speakerAttributes */
            speakerAttributes?: (number|null);

            /** TtsParams speechAttributes */
            speechAttributes?: (number|null);

            /** TtsParams languageIdentifier */
            languageIdentifier?: (number|null);

            /** TtsParams textGuidance */
            textGuidance?: (number|null);

            /** TtsParams other */
            other?: (string|null);
        }

        /** Represents a TtsParams. */
        class TtsParams implements ITtsParams {

            /**
             * Constructs a new TtsParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: playht.v1.ITtsParams);

            /** TtsParams text. */
            public text: string[];

            /** TtsParams voice. */
            public voice: string;

            /** TtsParams quality. */
            public quality?: (playht.v1.Quality|null);

            /** TtsParams format. */
            public format?: (playht.v1.Format|null);

            /** TtsParams sampleRate. */
            public sampleRate?: (number|null);

            /** TtsParams speed. */
            public speed?: (number|null);

            /** TtsParams seed. */
            public seed?: (number|null);

            /** TtsParams temperature. */
            public temperature?: (number|null);

            /** TtsParams topP. */
            public topP?: (number|null);

            /** TtsParams styleGuidance. */
            public styleGuidance?: (number|null);

            /** TtsParams voiceGuidance. */
            public voiceGuidance?: (number|null);

            /** TtsParams audioSource. */
            public audioSource?: (number|null);

            /** TtsParams speakerAttributes. */
            public speakerAttributes?: (number|null);

            /** TtsParams speechAttributes. */
            public speechAttributes?: (number|null);

            /** TtsParams languageIdentifier. */
            public languageIdentifier?: (number|null);

            /** TtsParams textGuidance. */
            public textGuidance?: (number|null);

            /** TtsParams other. */
            public other?: (string|null);

            /** TtsParams _quality. */
            public _quality?: "quality";

            /** TtsParams _format. */
            public _format?: "format";

            /** TtsParams _sampleRate. */
            public _sampleRate?: "sampleRate";

            /** TtsParams _speed. */
            public _speed?: "speed";

            /** TtsParams _seed. */
            public _seed?: "seed";

            /** TtsParams _temperature. */
            public _temperature?: "temperature";

            /** TtsParams _topP. */
            public _topP?: "topP";

            /** TtsParams _styleGuidance. */
            public _styleGuidance?: "styleGuidance";

            /** TtsParams _voiceGuidance. */
            public _voiceGuidance?: "voiceGuidance";

            /** TtsParams _audioSource. */
            public _audioSource?: "audioSource";

            /** TtsParams _speakerAttributes. */
            public _speakerAttributes?: "speakerAttributes";

            /** TtsParams _speechAttributes. */
            public _speechAttributes?: "speechAttributes";

            /** TtsParams _languageIdentifier. */
            public _languageIdentifier?: "languageIdentifier";

            /** TtsParams _textGuidance. */
            public _textGuidance?: "textGuidance";

            /** TtsParams _other. */
            public _other?: "other";

            /**
             * Creates a new TtsParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TtsParams instance
             */
            public static create(properties?: playht.v1.ITtsParams): playht.v1.TtsParams;

            /**
             * Encodes the specified TtsParams message. Does not implicitly {@link playht.v1.TtsParams.verify|verify} messages.
             * @param message TtsParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: playht.v1.ITtsParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TtsParams message, length delimited. Does not implicitly {@link playht.v1.TtsParams.verify|verify} messages.
             * @param message TtsParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: playht.v1.ITtsParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TtsParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TtsParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playht.v1.TtsParams;

            /**
             * Decodes a TtsParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TtsParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playht.v1.TtsParams;

            /**
             * Verifies a TtsParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TtsParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TtsParams
             */
            public static fromObject(object: { [k: string]: any }): playht.v1.TtsParams;

            /**
             * Creates a plain object from a TtsParams message. Also converts values to other types if specified.
             * @param message TtsParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: playht.v1.TtsParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TtsParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TtsParams
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Represents a Tts */
        class Tts extends $protobuf.rpc.Service {

            /**
             * Constructs a new Tts service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Tts service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tts;

            /**
             * Calls Tts.
             * @param request TtsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TtsResponse
             */
            public tts(request: playht.v1.ITtsRequest, callback: playht.v1.Tts.TtsCallback): void;

            /**
             * Calls Tts.
             * @param request TtsRequest message or plain object
             * @returns Promise
             */
            public tts(request: playht.v1.ITtsRequest): Promise<playht.v1.TtsResponse>;
        }

        namespace Tts {

            /**
             * Callback as used by {@link playht.v1.Tts#tts}.
             * @param error Error, if any
             * @param [response] TtsResponse
             */
            type TtsCallback = (error: (Error|null), response?: playht.v1.TtsResponse) => void;
        }

        /** Properties of a TtsRequest. */
        interface ITtsRequest {

            /** TtsRequest lease */
            lease?: (Uint8Array|null);

            /** TtsRequest params */
            params?: (playht.v1.ITtsParams|null);
        }

        /** Represents a TtsRequest. */
        class TtsRequest implements ITtsRequest {

            /**
             * Constructs a new TtsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: playht.v1.ITtsRequest);

            /** TtsRequest lease. */
            public lease: Uint8Array;

            /** TtsRequest params. */
            public params?: (playht.v1.ITtsParams|null);

            /**
             * Creates a new TtsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TtsRequest instance
             */
            public static create(properties?: playht.v1.ITtsRequest): playht.v1.TtsRequest;

            /**
             * Encodes the specified TtsRequest message. Does not implicitly {@link playht.v1.TtsRequest.verify|verify} messages.
             * @param message TtsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: playht.v1.ITtsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TtsRequest message, length delimited. Does not implicitly {@link playht.v1.TtsRequest.verify|verify} messages.
             * @param message TtsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: playht.v1.ITtsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TtsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TtsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playht.v1.TtsRequest;

            /**
             * Decodes a TtsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TtsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playht.v1.TtsRequest;

            /**
             * Verifies a TtsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TtsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TtsRequest
             */
            public static fromObject(object: { [k: string]: any }): playht.v1.TtsRequest;

            /**
             * Creates a plain object from a TtsRequest message. Also converts values to other types if specified.
             * @param message TtsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: playht.v1.TtsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TtsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TtsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TtsResponse. */
        interface ITtsResponse {

            /** TtsResponse sequence */
            sequence?: (number|null);

            /** TtsResponse id */
            id?: (string|null);

            /** TtsResponse data */
            data?: (Uint8Array|null);

            /** TtsResponse status */
            status?: (playht.v1.IStatus|null);
        }

        /** Represents a TtsResponse. */
        class TtsResponse implements ITtsResponse {

            /**
             * Constructs a new TtsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: playht.v1.ITtsResponse);

            /** TtsResponse sequence. */
            public sequence: number;

            /** TtsResponse id. */
            public id: string;

            /** TtsResponse data. */
            public data: Uint8Array;

            /** TtsResponse status. */
            public status?: (playht.v1.IStatus|null);

            /**
             * Creates a new TtsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TtsResponse instance
             */
            public static create(properties?: playht.v1.ITtsResponse): playht.v1.TtsResponse;

            /**
             * Encodes the specified TtsResponse message. Does not implicitly {@link playht.v1.TtsResponse.verify|verify} messages.
             * @param message TtsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: playht.v1.ITtsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TtsResponse message, length delimited. Does not implicitly {@link playht.v1.TtsResponse.verify|verify} messages.
             * @param message TtsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: playht.v1.ITtsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TtsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TtsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playht.v1.TtsResponse;

            /**
             * Decodes a TtsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TtsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playht.v1.TtsResponse;

            /**
             * Verifies a TtsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TtsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TtsResponse
             */
            public static fromObject(object: { [k: string]: any }): playht.v1.TtsResponse;

            /**
             * Creates a plain object from a TtsResponse message. Also converts values to other types if specified.
             * @param message TtsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: playht.v1.TtsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TtsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TtsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
