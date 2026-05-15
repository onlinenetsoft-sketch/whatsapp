import QRCode from 'qrcode';

export class QRManager {
  async generate(qr) {
    return QRCode.toDataURL(qr);
  }
}