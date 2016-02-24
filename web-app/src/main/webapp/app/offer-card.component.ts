import { Component, Input, AfterViewInit, ElementRef } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

var checkFirst = true;

@Component({
	selector: 'offer-card',
	templateUrl: 'app/offer-card.component.html',
	styleUrls: ['app/offer-card.component.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class OfferCardComponent implements AfterViewInit {
  	@Input() public position;
    @Input() public offer;
    @Input() public resizeCallback;
    @Input() public profile;
        

    ngAfterViewInit() {
        Waves.displayEffect(); 
        console.log(checkFirst);
      if(this.isProfile() && this.position == 0 && checkFirst){
      	checkFirst = false;
		$('.modal-trigger').leanModal();
      }
    }
    
    public getPrice() {
        var offer = this.offer;
        var str;
        if(offer.price < 0) {
            str = 'Make $' + Math.abs(offer.price);
        } else if (offer.price === 0) {
            return 'Free';
        } else {
            str = '$' + offer.price
        }

        if (offer.unit) {
            str = str + '/' + offer.unit;
        }

        return str;
    }

    public isRequest() {
        return this.offer.price < 0;
    }

    public getOfferTypeText() {
        if(this.isRequest()) {
            return this.offer.person.firstName + ' wants';
        } else {
            return this.offer.person.firstName + ' offers';
        }
    }

    public loaded() {
        this.resizeCallback();
    }
    public getPosition(){
    	return this.position;
    }
    
    public isProfile(){
    	if(this.profile == true)
    		return true;
    	else return false;    	
    }
}
