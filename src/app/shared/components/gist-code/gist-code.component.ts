import { Component, Input, OnInit } from '@angular/core';

import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gist-code',
  standalone: false,
  templateUrl: './gist-code.component.html',
  styleUrls: ['./gist-code.component.css'],
})
export class GistCodeComponent implements OnInit {
  @Input() code: string = '';
  formattedCode: string = '';
  formattedClass: string = '';

  starIcon = faStar;
  forkIcon = faCodeFork;

  ngOnInit() {
    this.formattedCode = this.syntaxHighlight(this.code);
  }

  syntaxHighlight(json: string) {
    let formatted: string = '';
    json = json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    formatted = json.replace(
      /("((?:\\u[0-9A-Fa-f]{4})|[^"\\n\\r])*?"(:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
    this.formattedClass = formatted;
    return formatted;
  }
}
