import { Component, Input } from '@angular/core';

@Component({
  selector: 'bike-store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

    @Input() primary = false;
    @Input() backgroundColor?: string;
    @Input() color?: string;
    @Input() size: 'small' | 'medium' | 'large' = 'medium';
    @Input() label = 'Button';

    public get classes(): string[] {
      const mode = this.primary
        ? 'storybook-header--primary'
        : 'storybook-header--secondary';

      return ['storybook-header', `storybook-header--${this.size}`, mode];
    }
  }
