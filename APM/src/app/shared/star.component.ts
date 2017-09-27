import { Component, OnChanges } from '@angular/core'

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    rating : number = 4;
    starWidth : number;
    
    ngOnChanges(): void {
        this.starWidth = this.starWidth * 86/5; //86 is the width of the div in the template of this component
    }
}