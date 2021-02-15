import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  pure: true,
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  transform(highlight: string, value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      highlight?.length
        ? value.replace(new RegExp(highlight, 'ig'), (substr) => `<span class="highlight">${substr}</span>`)
        : value
    );
  }

}
