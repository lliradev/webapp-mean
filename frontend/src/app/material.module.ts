import { NgModule } from '@angular/core';

// material angular
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
    ],
    exports:[
        MatButtonModule,
        MatCardModule
    ]
})
export class MaterialModule{}