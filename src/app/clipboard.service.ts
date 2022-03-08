import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private clipboard: Clipboard) {}
  copyText(text: string) {
    this.clipboard.copy(text);
  }
}
