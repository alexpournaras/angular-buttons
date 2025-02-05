import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-buttons';

  @ViewChild('helloText', { static: true }) helloText!: ElementRef;
  @ViewChild('congratsText', { static: true }) congratsText!: ElementRef;

  textToSpeech() {
    const hello = this.helloText.nativeElement.textContent;
    const congrats = this.congratsText.nativeElement.textContent;
    const speech = new SpeechSynthesisUtterance(`${hello}. ${congrats}`);
    window.speechSynthesis.speak(speech);
  }

  increaseTextSize() {
    const element = this.congratsText.nativeElement;
    const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentSize * 1.1}px`;
  }

  decreaseTextSize() {
    const element = this.helloText.nativeElement;
    const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentSize * 0.9}px`;
  }
}

