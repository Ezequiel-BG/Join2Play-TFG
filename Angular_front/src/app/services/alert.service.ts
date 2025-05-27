import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  message: string | null = null;
  type: 'success' | 'error' = 'success';

  constructor() {
    const stored = sessionStorage.getItem('globalAlert');
    if (stored) {
      const data = JSON.parse(stored);
      this.message = data.message;
      this.type = data.type;
      this.clearAfterDelay();
      sessionStorage.removeItem('globalAlert');
    }
  }

  showSuccess(message: string, persist = false) {
    this.setAlert(message, 'success', persist);
  }

  showError(message: string, persist = false) {
    this.setAlert(message, 'error', persist);
  }

  private setAlert(message: string, type: 'success' | 'error', persist: boolean) {
    this.message = message;
    this.type = type;
    if (persist) {
      sessionStorage.setItem('globalAlert', JSON.stringify({ message, type }));
    } else {
      this.clearAfterDelay();
    }
  }

  private clearAfterDelay() {
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
