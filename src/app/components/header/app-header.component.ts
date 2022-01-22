import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
    title: string = 'Todo App';
    // heros = [
    //     {
    //         name: 'Hrishikesh',
    //         canFly: true
    //     },
    //     {
    //         name: 'Punam',
    //         canFly: true
    //     },
    //     {
    //         name: 'Ganesh',
    //         canFly: false
    //     }
    // ];

    // addNewHero() {
    //     this.heros = [...this.heros, {
    //         name: 'Laxman',
    //         canFly: true
    //     }];
    // }
}