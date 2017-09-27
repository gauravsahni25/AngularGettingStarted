import { Component, OnChanges } from '@angular/core'

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    rating : number = 4;
    starWidth : number;
    
    //This never occurs until we hook up the input from the Container Component, as we just 
    //have default values.
    //Also note that OnChanges watches changes only to input properties.
    //And so far we do not have any input properties.
    ngOnChanges(): void {
        this.starWidth = this.starWidth * 86/5; //86 is the width of the div in the template of this component
    }
}