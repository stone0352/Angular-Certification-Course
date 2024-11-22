import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [CardComponent],          //  Declares the CardComponent
    exports: [CardComponent]    // tells Angular that export should be shared by any module that uses the SharedModule
})

export class SharedModule {}