import {Component, AfterViewInit, ElementRef} from 'angular2/core';

@Component({
    selector: 'floating',
    templateUrl: 'app/floating.component.html',
	styleUrls: ['app/floating.component.css']
})
export class FloatingComponent implements AfterViewInit {
	  constructor(private _elementRef: ElementRef) {
	  
	  } 
}
