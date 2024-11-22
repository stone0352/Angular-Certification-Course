import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
//    standalone: true,                                 // Excluded when migrating component to mode, and bc the default is 'false'
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{}