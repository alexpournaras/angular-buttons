import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Output() close = new EventEmitter<void>();

  // Options for the button style
  backgroundColor = ['lightgray', 'black', 'white'];
  textColor = ['red', 'black', 'white', 'blue'];
  textSize = ['16px', '18px', '20px', '22px', '24px'];
  borderColor = ['black', 'white', 'gold', 'silver'];
  borderSize = ['1px', '2px', '3px', '4px', '5px'];
  borderRadius = ['0px', '4px', '8px', '12px', '16px'];

  // Default selected style
  buttonStyle = {};
  selectedBackgroundColor = this.backgroundColor[0];
  selectedTextColor = this.textColor[0];
  selectedTextSize = this.textSize[0];
  selectedBorderColor = this.borderColor[0];
  selectedBorderSize = this.borderSize[0];
  selectedBorderRadius = this.borderRadius[1];

  // Update the button style based on the selected options
  updateButtonStyle() {
    this.buttonStyle = {
      'background-color': this.selectedBackgroundColor,
      'color': this.selectedTextColor,
      'font-size': this.selectedTextSize,
      'border-color': this.selectedBorderColor,
      'border-width': this.selectedBorderSize,
      'border-radius': this.selectedBorderRadius
    };
  }

  onClose() {
    this.close.emit();
  }
} 