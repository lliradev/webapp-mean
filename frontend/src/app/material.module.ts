import { NgModule } from '@angular/core';

// material angular
import {
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule { }