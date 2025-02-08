import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isModalOpen = false;
  private colors = ['black', 'red', 'green', 'blue'];
  private currentColorIndex = 0;

  @ViewChild('h1Text', { static: true }) h1Text!: ElementRef;
  @ViewChild('paragraphText', { static: true }) paragraphText!: ElementRef;

  textToSpeech() {
    const h1 = this.h1Text.nativeElement.textContent;
    const p = this.paragraphText.nativeElement.textContent;
    const speech = new SpeechSynthesisUtterance(`${h1}. ${p}`);
    window.speechSynthesis.speak(speech);
  }

  increaseTextSize() {
    const h1Element = this.h1Text.nativeElement;
    const h1CurrentSize = parseFloat(window.getComputedStyle(h1Element).fontSize);
    h1Element.style.fontSize = `${h1CurrentSize * 1.1}px`;

    const pElement = this.paragraphText.nativeElement;
    const pCurrentSize = parseFloat(window.getComputedStyle(pElement).fontSize);
    pElement.style.fontSize = `${pCurrentSize * 1.1}px`;
  }

  decreaseTextSize() {
    const h1Element = this.h1Text.nativeElement;
    const h1CurrentSize = parseFloat(window.getComputedStyle(h1Element).fontSize);
    h1Element.style.fontSize = `${h1CurrentSize * 0.9}px`;

    const pElement = this.paragraphText.nativeElement;
    const pCurrentSize = parseFloat(window.getComputedStyle(pElement).fontSize);
    pElement.style.fontSize = `${pCurrentSize * 0.9}px`;
  }

  changeTextColor() {
    const h1Element = this.h1Text.nativeElement;
    const pElement = this.paragraphText.nativeElement;
    
    this.currentColorIndex = this.currentColorIndex + 1;
    if (this.currentColorIndex >= this.colors.length) this.currentColorIndex = 0;

    h1Element.style.color = this.colors[this.currentColorIndex];
    pElement.style.color = this.colors[this.currentColorIndex];
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  } 
}

