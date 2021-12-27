import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  formgroup!: FormGroup;
  valuesArray: string[] = [];
  randomValueArray: string[] = [];
  value: string = '';
  inputCount: any;
  pickRandom: string = '';
  random: any;
  lastElement: any;
  secondToLast: any;
  showNotification: string = '';
  count: number = 0;
  showList: boolean = false;


  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      name: ['']
    })
  }


  addToValuesArray() {
    if (this.formgroup.controls['name'].value != '') {
      this.valuesArray.push(this.value);
      this.value = '';
      // console.log(this.valuesArray)
    }
  }

  pickFromValuesArray() {
    if (this.valuesArray.length >= 2) {
      let arrayLength = this.valuesArray.length;

      this.random = Math.floor(Math.random() * arrayLength);

      this.pickRandom = this.valuesArray[this.random];
      this.pickRandom.toUpperCase()
      this.randomValueArray.push(this.pickRandom);

      let randomValueArrayLength = this.randomValueArray.length;

      this.secondToLast = this.randomValueArray[randomValueArrayLength - 2];

      this.lastElement = this.randomValueArray.slice(-1);

      // console.log(this.randomValueArray)

      if (this.lastElement == this.secondToLast) {
        this.count++
        // console.log(this.count)
      } else {
        this.count = 1;
      }

    } else {
      this.showNotification = 'Please enter value!'
    }
  }

  showListMethod() {
    this.showList = !this.showList;
  }


}
