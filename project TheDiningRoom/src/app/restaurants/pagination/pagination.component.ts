import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  imports: [NgbPaginationModule],
  standalone: true,
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() pageSize: number = 9;
  @Input() collectionSize: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  onBtnClick(newPage: number) {
    this.pageChange.emit(newPage);
  }
}
