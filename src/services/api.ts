// Centralized API service. Currently returns mock data; later points to local FastAPI.
export const API_BASE_URL = "http://localhost:8000";

export type NfcStatus = { connected: boolean; device: string };

export const api = {
  async getNfcStatus(): Promise<NfcStatus> {
    // TODO: fetch(`${API_BASE_URL}/nfc/status`)
    return { connected: true, device: "PN532 (จำลอง)" };
  },
};
