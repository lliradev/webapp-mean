import { NgModule } from '@angular/core';

// material angular
import {
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }