import { Component, OnChanges, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnChanges{
@Input() attrBook:any=""

ngOnChanges(changes: SimpleChanges): void{
  console.log("the book property got changed");
}
}
