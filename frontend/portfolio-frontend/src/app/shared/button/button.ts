import { Component, input, output } from '@angular/core';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger';

export type ButtonSize =
  | 'small'
  | 'medium'
  | 'large';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  label = input.required<string>();

  variant = input<ButtonVariant>('primary');

  size = input<ButtonSize>('medium');

  disabled = input<boolean>(false);

  clicked = output<void>();

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.clicked.emit();
  }
}
