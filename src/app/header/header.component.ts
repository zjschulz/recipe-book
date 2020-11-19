import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    @Output() featureSelected = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService) {}

    onSelect(feature: string) {
        this.featureSelected.emit(feature)
    }

    ngOnInit() {
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

}