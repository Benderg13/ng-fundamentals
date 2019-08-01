import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    eventExample = {
        id: 1,
        name: 'Half Marathon',
        date: '10/21/2019',
        time: '8:00 am'
    }
}