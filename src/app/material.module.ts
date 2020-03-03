import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatFormFieldModule,
             MatIconModule, MatMomentDateModule, MatDatepickerModule, MatCheckboxModule,
             MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule ],
  exports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatFormFieldModule,
             MatIconModule, MatMomentDateModule, MatDatepickerModule, MatCheckboxModule,
             MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
            MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule ]
})
export class MaterialModule { }
