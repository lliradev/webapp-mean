import { NgModule } from '@angular/core';

// material angular
import {
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatBadgeModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule
    ]
})
export class MaterialModule { }