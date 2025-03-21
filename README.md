<div align="center">
  <a href="https://play.ht">
    <img
      width="200"
      alt="playht playai logo"
      src="https://github.com/user-attachments/assets/c97afbf8-0fe2-4cbb-8d32-9af0ca8901c0"
    />
  </a>
<p></p>
<p>Nền Tảng Tạo Giọng Nói Bằng Trí Tuệ Nhân Tạo</p>

</div>

---

[![npm version](https://badge.fury.io/js/playht.svg)](https://www.npmjs.com/package/playht) [![Downloads](https://img.shields.io/npm/dm/playht.svg)](https://www.npmjs.com/package/playht)


PlayHT SDK cung cấp các phương thức dễ sử dụng để làm việc với [PlayHT API](https://docs.play.ht/reference/api-getting-started).

**Mục Lục**

- [Cách Sử Dụng](#cách-sử-dụng)
  - [Khởi tạo thư viện](#khởi-tạo-thư-viện)
  - [Tạo Giọng Nói](#tạo-giọng-nói)
  - [Phát Trực Tiếp Giọng Nói](#phát-trực-tiếp-giọng-nói)
  - [Các Tùy Chọn Tạo Giọng Nói](#các-tùy-chọn-tạo-giọng-nói)
    - [Giọng Nói Play3.0-mini](#giọng-nói-play30-mini-khuyên-dùng)
    - [Giọng Nói PlayHT 2.0](#giọng-nói-playht-20)
    - [Giọng Nói PlayHT 1.0](#giọng-nói-playht-10)
    - [Giọng Nói Tiêu Chuẩn](#giọng-nói-tiêu-chuẩn)
  - [Liệt Kê Các Giọng Nói Hiện Có](#liệt-kê-các-giọng-nói-hiện-có)
  - [Nhân Bản Tức Thì Một Giọng Nói](#nhân-bản-tức-thì-một-giọng-nói)
    - [Xóa Một Giọng Nói Đã Nhân Bản](#xóa-một-giọng-nói-đã-nhân-bản)
- [Ví Dụ SDK](#ví-dụ-sdk)
  - [Ví Dụ Máy Chủ](#ví-dụ-máy-chủ)
  - [Ví Dụ Tích Hợp ChatGPT](#ví-dụ-tích-hợp-chatgpt)

# Cách Sử Dụng

Module này được phân phối thông qua [npm](https://www.npmjs.com/) và nên được cài đặt như một trong các dependency của dự án của bạn:

```shell
npm install --save playht
```

hoặc cài đặt với trình quản lý gói [yarn](https://yarnpkg.com/):

```shell
yarn add playht
```

## Khởi tạo thư viện

Trước khi sử dụng SDK, bạn cần khởi tạo thư viện với thông tin xác thực của bạn. Bạn sẽ cần Khóa Bí Mật API và ID Người Dùng của bạn. Nếu bạn đã có tài khoản PlayHT, hãy điều hướng đến [trang truy cập API](https://play.ht/studio/api-access). Để biết thêm chi tiết [xem tài liệu API](https://docs.play.ht/reference/api-authentication#generating-your-api-secret-key-and-obtaining-your-user-id).

_**Quan trọng:** Giữ bí mật Khóa Bí Mật API của bạn. Không chia sẻ nó với bất kỳ ai hoặc đưa vào kho lưu trữ mã nguồn công khai._

Nhập các phương thức từ thư viện và gọi `init()` với thông tin xác thực của bạn để thiết lập SDK:

```javascript
import * as PlayHT from 'playht';

PlayHT.init({
  apiKey: '<KHÓA API CỦA BẠN>',
  userId: '<ID NGƯỜI DÙNG CỦA BẠN>',
});
```

**_Lưu ý: Tất cả các ví dụ dưới đây yêu cầu bạn gọi phương thức init() với thông tin xác thực của bạn trước._**

Khi khởi tạo thư viện, bạn cũng có thể thiết lập giọng nói mặc định và công cụ giọng nói mặc định để sử dụng cho bất kỳ phương thức tạo giọng nói nào sau này khi không xác định giọng nói:

```javascript
import * as PlayHT from 'playht';

PlayHT.init({
  apiKey: '<KHÓA API CỦA BẠN>',
  userId: '<ID NGƯỜI DÙNG CỦA BẠN>',
  defaultVoiceId: 's3://peregrine-voices/oliver_narrative2_parrot_saad/manifest.json',
  defaultVoiceEngine: 'Play3.0-mini',
});
```

## Tạo Giọng Nói

Để lấy URL với âm thanh cho một tệp đã tạo sử dụng cài đặt mặc định, hãy gọi phương thức `generate()` với văn bản bạn muốn chuyển đổi.

```javascript
import * as PlayHT from 'playht';

// Tạo âm thanh từ văn bản
const generated = await PlayHT.generate('Máy tính có thể nói chuyện bây giờ!');

// Lấy URL tệp đã tạo
const { audioUrl } = generated;

console.log('URL cho tệp âm thanh là', audioUrl);
```

Kết quả đầu ra cũng chứa trường `generationId` và trường tùy chọn `message`. `generationId` là một định danh duy nhất cho yêu cầu tạo, có thể được sử dụng để theo dõi và tham chiếu đến công việc tạo cụ thể. Trường tùy chọn `message` cung cấp thông tin bổ sung về việc tạo như thông báo trạng thái hoặc lỗi.

Để biết thêm tùy chọn tạo giọng nói, xem [Các Tùy Chọn Tạo Giọng Nói](#các-tùy-chọn-tạo-giọng-nói) bên dưới.

## Phát Trực Tiếp Giọng Nói

Phương thức `stream()` phát trực tiếp âm thanh từ văn bản. Nó trả về một luồng đọc mà các byte âm thanh sẽ chảy vào ngay khi chúng sẵn sàng. Ví dụ, để sử dụng cài đặt mặc định để chuyển đổi văn bản thành luồng âm thanh và ghi nó vào một tệp:

```javascript
import * as PlayHT from 'playht';
import fs from 'fs';

// Tạo một luồng tệp
const fileStream = fs.createWriteStream('hello-playht.mp3');

// Phát trực tiếp âm thanh từ văn bản
const stream = await PlayHT.stream('Điều này nghe rất thực tế.');

// Đưa luồng vào tệp
stream.pipe(fileStream);
```

Phương thức `stream()` cũng cho phép bạn phát trực tiếp âm thanh từ đầu vào luồng văn bản. Ví dụ, để chuyển đổi luồng văn bản thành tệp âm thanh sử dụng cài đặt mặc định:

```javascript
import * as PlayHT from 'playht';
import { Readable } from 'stream';
import fs from 'fs';

// Tạo một luồng thử nghiệm
const textStream = new Readable({
  read() {
    this.push('Bạn có thể phát trực tiếp ');
    this.push('văn bản trực tiếp vào ');
    this.push('một luồng âm thanh!');
    this.push(null); // Kết thúc dữ liệu
  },
});

// Phát trực tiếp âm thanh từ văn bản
const stream = await PlayHT.stream(textStream);

// Tạo một luồng tệp
const fileStream = fs.createWriteStream('hello-playht.mp3');
stream.pipe(fileStream);
```

Để xem ví dụ đầy đủ về việc sử dụng API phát trực tiếp giọng nói từ luồng đầu vào, hãy xem [Ví dụ Tích hợp ChatGPT](packages/gpt-example/README.md) của chúng tôi.

Để biết thêm các tùy chọn tạo giọng nói, xem [Các Tùy Chọn Tạo Giọng Nói](#các-tùy-chọn-tạo-giọng-nói).

**_Lưu ý: Để có độ trễ thấp nhất có thể, hãy sử dụng API phát trực tiếp với mô hình `Play3.0-mini`._**

## Các Tùy Chọn Tạo Giọng Nói

Tất cả các phương thức chuyển văn bản thành giọng nói ở trên đều chấp nhận tham số tùy chọn `options`. Bạn có thể sử dụng nó để tạo âm thanh với các giọng nói, mô hình AI, định dạng tệp đầu ra khác nhau và nhiều hơn nữa.

Các tùy chọn có sẵn sẽ phụ thuộc vào mô hình AI tổng hợp giọng nói đã chọn. API PlayHT hỗ trợ các loại mô hình khác nhau: `Play3.0-mini`, `PlayHT2.0`, `PlayHT2.0-turbo`, `PlayHT1.0` và `Standard`. Để biết tất cả các tùy chọn có sẵn, hãy xem định nghĩa kiểu TypeScript [trong mã](packages/playht/src/index.ts).

### Giọng Nói Play3.0-mini (Khuyên dùng)

Mô hình AI giọng nói hội thoại mới nhất của chúng tôi với thêm nhiều ngôn ngữ, độ trễ thấp nhất và khả năng nhân bản tức thì. Tương thích với `PlayHT2.0` và `PlayHT2.0-turbo`, mô hình đáng tin cậy và nhanh nhất của chúng tôi để phát trực tiếp.

Để phát trực tiếp sử dụng mô hình `Play3.0-mini`:

```javascript
import * as PlayHT from 'playht';
import fs from 'fs';

// Tạo một luồng tệp
const fileStream = fs.createWriteStream('play_3.mp3');

// Phát trực tiếp âm thanh từ văn bản
const stream = await PlayHT.stream('Phát trực tiếp giọng nói thực tế nói những gì bạn muốn!', {
  voiceEngine: 'Play3.0-mini',
  voiceId: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
  outputFormat: 'mp3',
});

// Đưa luồng vào tệp
stream.pipe(fileStream);
```

### Giọng Nói PlayHT 2.0

Mô hình AI giọng nói hội thoại mới nhất của chúng tôi với hướng dẫn cảm xúc và khả năng nhân bản tức thì. Tương thích với `PlayHT2.0-turbo`. Chỉ hỗ trợ tiếng Anh.

Để tạo một tệp âm thanh sử dụng giọng nói PlayHT 2.0 với cảm xúc và các tùy chọn khác:

```javascript
import * as PlayHT from 'playht';

const text = 'Tôi có phải là một giọng nói hội thoại với các tùy chọn không?';

// Tạo âm thanh từ văn bản
const generated = await PlayHT.generate(text, {
  voiceEngine: 'PlayHT2.0',
  voiceId: 's3://peregrine-voices/oliver_narrative2_parrot_saad/manifest.json',
  outputFormat: 'mp3',
  temperature: 1.5,
  quality: 'high',
  speed: 0.8,
  emotion: 'male_fearful',
  styleGuidance: 20,
});

// Lấy URL tệp đã tạo
const { audioUrl } = generated;

console.log('URL cho tệp âm thanh là', audioUrl);
```

Để phát trực tiếp sử dụng mô hình `PlayHT2.0-turbo`:

```javascript
import * as PlayHT from 'playht';
import fs from 'fs';

// Tạo một luồng tệp
const fileStream = fs.createWriteStream('turbo-playht.mp3');

// Phát trực tiếp âm thanh từ văn bản
const stream = await PlayHT.stream('Phát trực tiếp giọng nói thực tế nói những gì bạn muốn!', {
  voiceEngine: 'PlayHT2.0-turbo',
  voiceId: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
  outputFormat: 'mp3',
  emotion: 'female_happy',
  styleGuidance: 10,
});

// Đưa luồng vào tệp
stream.pipe(fileStream);
```

### Giọng Nói PlayHT 1.0

Giọng nói giống thật lý tưởng cho nội dung biểu cảm và hội thoại. Chỉ hỗ trợ tiếng Anh.

Để tạo âm thanh với giọng nói PlayHT 1.0:

```javascript
import * as PlayHT from 'playht';

const text = 'Các tùy chọn không bao giờ là đủ.';

// Tạo âm thanh từ văn bản
const generated = await PlayHT.generate(text, {
  voiceEngine: 'PlayHT1.0',
  voiceId: 'susan',
  outputFormat: 'wav',
  temperature: 0.5,
  quality: 'medium',
  seed: 11,
});

// Lấy URL tệp đã tạo
const { audioUrl } = generated;

console.log('URL cho tệp âm thanh là', audioUrl);
```

### Giọng Nói Tiêu Chuẩn

Dùng cho tạo giọng nói đa ngôn ngữ, thay đổi cao độ và thêm khoảng dừng. Giọng nói với đầu ra đáng tin cậy và hỗ trợ cho Ngôn ngữ Đánh dấu Tổng hợp Giọng nói (SSML). Hỗ trợ hơn 100 ngôn ngữ.

Và một ví dụ với giọng nói tiêu chuẩn bằng tiếng Tây Ban Nha:

```javascript
import * as PlayHT from 'playht';

const text = 'La inteligencia artificial puede hablar español.';

// Tạo âm thanh từ văn bản
const generated = await PlayHT.generate(text, {
  voiceEngine: 'Standard',
  voiceId: 'Mia',
  quality: 'low',
  speed: 1.2,
});

// Lấy URL tệp đã tạo
const { audioUrl } = generated;

console.log('URL cho tệp âm thanh là', audioUrl);
```

## Liệt Kê Các Giọng Nói Hiện Có

Để liệt kê tất cả các giọng nói có sẵn trong nền tảng của chúng tôi, bao gồm cả các giọng nói bạn đã nhân bản, bạn có thể gọi phương thức `listVoices()` mà không cần tham số:

```javascript
import * as PlayHT from 'playht';

// Lấy tất cả các giọng nói có sẵn
const voices = await PlayHT.listVoices();

// Hiển thị chúng ra console
console.log(JSON.stringify(voices, null, 2));
```

Phương thức `listVoices()` cũng nhận một tham số tùy chọn để lọc giọng nói theo các trường khác nhau. Để lấy tất cả giọng nói nữ có sẵn PlayHT 2.0:

```javascript
import * as PlayHT from 'playht';

// Lấy giọng nói nữ có sẵn PlayHT 2.0
const voices = await PlayHT.listVoices({
  gender: 'female',
  voiceEngine: ['PlayHT2.0'],
  isCloned: false,
});

// Hiển thị chúng ra console
console.log(JSON.stringify(voices, null, 2));
```

## Nhân Bản Tức Thì Một Giọng Nói

Bạn có thể sử dụng phương thức `clone()` để tạo một giọng nói nhân bản từ dữ liệu âm thanh. Giọng nói nhân bản đã sẵn sàng để sử dụng ngay lập tức.

```javascript
import * as PlayHT from 'playht';
import fs from 'fs';

// Tải một tệp âm thanh
const fileBlob = fs.readFileSync('voice-to-clone.mp3');

// Nhân bản giọng nói
const clonedVoice = await PlayHT.clone('dolly', fileBlob, 'male');

// Hiển thị thông tin giọng nói nhân bản trong console
console.log('Thông tin giọng nói nhân bản\n', JSON.stringify(clonedVoice, null, 2));

// Sử dụng giọng nói nhân bản ngay lập tức để tạo một tệp âm thanh
const fileStream = fs.createWriteStream('hello-dolly.mp3');
const stream = await PlayHT.stream('Giọng nói nhân bản cũng nghe thực tế.', {
  voiceEngine: clonedVoice.voiceEngine,
  voiceId: clonedVoice.id,
});
stream.pipe(fileStream);
```

Phương thức `clone()` cũng có thể nhận chuỗi URL làm đầu vào:

```javascript
import * as PlayHT from 'playht';
import fs from 'fs';

// URL tệp âm thanh
const fileUrl = 'https://peregrine-samples.s3.amazonaws.com/peregrine-voice-cloning/Neil-DeGrasse-Tyson-sample.wav';

// Nhân bản giọng nói
const clonedVoice = await PlayHT.clone('neil', fileUrl, 'male');

// Hiển thị thông tin giọng nói nhân bản trong console
console.log('Thông tin giọng nói nhân bản\n', JSON.stringify(clonedVoice, null, 2));

// Sử dụng giọng nói nhân bản ngay lập tức để tạo một tệp âm thanh
const fileStream = fs.createWriteStream('hello-neil.mp3');
const stream = await PlayHT.stream('Giọng nói nhân bản là khoa học thuần túy.', {
  voiceEngine: clonedVoice.voiceEngine,
  voiceId: clonedVoice.id,
});
stream.pipe(fileStream);
```

### Xóa Một Giọng Nói Đã Nhân Bản

Sử dụng phương thức `deleteClone()` để xóa giọng nói đã nhân bản.

```javascript
import * as PlayHT from 'playht';

const cloneId = 's3://voice-cloning-zero-shot/abcdefgh-01d3-4613-asdf-9a8b7774dbc2/my-clone/manifest.json';

const message = await PlayHT.deleteClone(cloneId);

console.log('Thông báo kết quả deleteClone là', message);
```

Hãy nhớ rằng, hành động này không thể hoàn tác.

# Ví Dụ SDK

Kho lưu trữ này chứa một ví dụ triển khai cho API và một ví dụ về tích hợp với API ChatGPT.

Để xác thực yêu cầu cho các ví dụ, bạn cần tạo Khóa Bí Mật API và lấy ID Người Dùng của bạn. Nếu bạn đã có tài khoản PlayHT, hãy điều hướng đến [trang truy cập API](https://play.ht/studio/api-access). Để biết thêm chi tiết [xem tài liệu API](https://docs.play.ht/reference/api-authentication#generating-your-api-secret-key-and-obtaining-your-user-id).

Trước khi chạy các ví dụ, hãy xây dựng SDK:

```shell
cd packages/playht
yarn install
yarn build
```

## Ví Dụ Máy Chủ

Tạo một tệp `.env` mới trong thư mục `packages/sdk-example` bằng cách sao chép tệp `.env.example` đã cung cấp. Sau đó chỉnh sửa tệp với thông tin xác thực của bạn.

Để chạy nó cục bộ:

```shell
cd packages/sdk-example
yarn
yarn install:all
yarn start
```

Điều hướng đến http://localhost:3000/ để xem máy chủ ví dụ.

## Ví Dụ Tích Hợp ChatGPT

Tạo một tệp `.env` mới trong thư mục `packages/gpt-example/server` bằng cách sao chép tệp `.env.example` đã cung cấp. Sau đó chỉnh sửa tệp với thông tin xác thực của bạn.
Ví dụ này cũng yêu cầu [thông tin xác thực OpenAI](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) của bạn, xem tệp `.env` ví dụ để biết chi tiết.

Để chạy nó cục bộ:

```shell
cd packages/gpt-example
yarn
yarn install:all
yarn start
```

Xem [tài liệu đầy đủ về Ví dụ Tích hợp ChatGPT](packages/gpt-example/README.md).
