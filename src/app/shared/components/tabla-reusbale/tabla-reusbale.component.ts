import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableModule, MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {ButtomReusableComponent} from "../button-reusable/buttom-reusable.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";

// En tabla-reusbale.component.ts
export interface DeleteEvent {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-tabla-reusbale',
  standalone: true,
  imports: [MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule, ButtomReusableComponent, MatMenu, MatMenuTrigger, MatIconButton, MatMenuItem],
  templateUrl: './tabla-reusbale.component.html',
  styleUrl: './tabla-reusbale.component.css'
})
export class TablaReusbaleComponent implements  OnInit{
  @Input() data: any[] = [];
  @Input() columns: {key: string, label: string}[] = [];
  @Input() showActions: boolean = false;
  @Output() onDeleteClick = new EventEmitter<DeleteEvent>(); //evento para elimnar
  @Output() onNuevoClick = new EventEmitter<void>(); //rcibe el metodo que se pasa al boton para ejecutarlo




  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 // @ViewChild(MatTable) table!: MatTable<any>;


  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];


  constructor() {
    this.dataSource = new MatTableDataSource<any>([]);
    //console.log("se inicia el constructor de la tabla")
  }

  manejarClickNuevoBoton() {
    this.onNuevoClick.emit();
  }





  ngOnInit() {
   // console.log('OnInit - Columns:', this.columns);
    this.initializeColumns();
    // Inicializar dataSource con datos si existen
    if (this.data && this.data.length > 0) {
     // console.log("dentro del if de ngonit")
      this.updateDataSource(this.data);
    }
  }



  private initializeColumns() {
    this.displayedColumns = this.columns.map(col => col.key);
    if (this.showActions) {
      this.displayedColumns.push('actions');
    }
    //console.log('DisplayedColumns:', this.displayedColumns);
  }



  private updateDataSource(data: any[]) {
    //console.log('Updating dataSource with:', data);
    const clientesData = data[0]?.datos || [];
    if (!this.dataSource) {
     // console.log("dentro del if de updatingdatasource")
      this.dataSource = new MatTableDataSource<any>();
    }
    this.dataSource.data = clientesData;

    // Actualizar paginator y sort
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }






  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngOnChanges(changes: SimpleChanges) {
   // console.log("se detecto al gun cambio")
    if (changes['data']) {
    //  console.log("dentro del if de cuando se detectyo un cambio")
      const currentData = changes['data'].currentValue;
    //  console.log('Data changed:', currentData);
      if (Array.isArray(currentData)) {
        //console.log("dentro del segundo if del cuandose detecto un cambio");
        this.updateDataSource(currentData);
      }
    }

    if (changes['columns']) {
      this.initializeColumns();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEdit(element: any) {
    // Emitir evento de edición
    console.log('Editar:', element.Folio);
    alert("editanfo")
  }
  onDelete(element: any) {
    // Emitir evento de eliminación
    this.onDeleteClick.emit({id: element.id, nombre: element.nombre});

  }
  get tableData() {
    return this.dataSource?.data || [];
  }

  // Aña
  ngDoCheck() {
   // console.log('DoCheck - DataSource data:', this.dataSource?.data);
    //console.log('DoCheck - Table data:', this.tableData);
  }
}


//

























