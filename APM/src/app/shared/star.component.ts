import { Component, OnChanges, Input } from '@angular/core'

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating : number;
    starWidth : number;
    
    //Also note that OnChanges watches changes only to input properties.
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5; //86 is the width of the div in the template of this component
    }
}