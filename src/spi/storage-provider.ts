export interface IStorageProvider {
  upload(key: string, stream: unknown, mimeType: string): Promise<string>;
  getDownloadUrl(key: string, expiresInSeconds?: number): Promise<string>;
  delete(key: string): Promise<void>;
}
