import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // JayG: Only time we can pass values into the components is if we decorate it with the input argument
    @Input() rating: number;
    starWidth: number;

    // JayG: Components talk to the outside world using events,
    // hence when the onClick is fired, we pass to the ratingClicked event,
    // and the ratingClicked event is bound in the product-list page
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
