import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  value: string | undefined;
  droped = '';
  dragedColor = null;
  isExpandImage!: boolean;
  isExpandText!: boolean;

  sampleImages = ['sample1', 'sample2', 'sample3'];
  sampleTexts = ['text1', 'text2'];

  date = new Date().toLocaleDateString();
  time = new Date().toLocaleTimeString();
  images = [
    {
      itemImageSrc:
        'https://images.unsplash.com/photo-1568563276588-bbce96223075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0ExMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      itemImageSrc:
        'https://images.unsplash.com/photo-1526391922840-891b87f9af1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0ExMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      itemImageSrc:
        'https://images.unsplash.com/photo-1613255167658-6815dfa67cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MTYlM0ExMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  options = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      selectedCity: new FormControl(),
    });
  }

  dragStart(e: any, c: any) {
    this.dragedColor = c;
  }

  dragEnd(e: any) {}

  drop(e: any) {
    if (this.dragedColor) {
      this.droped = this.dragedColor;
      this.dragedColor = null;
    }
  }

  handleExpand(name: string) {
    switch (name) {
      case 'image': {
        this.isExpandImage = !this.isExpandImage;
        break;
      }
      case 'text': {
        this.isExpandText = !this.isExpandText;
        break;
      }
    }
  }
}
