import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selecion/avatar-selector.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [
        AvatarSelectorComponent
    ],
    exports: [
        AvatarSelectorComponent
    ]
})
export class ComponentsModule {}
