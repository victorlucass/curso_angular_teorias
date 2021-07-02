import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { switchMap } from "rxjs/operators";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book$: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {


    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getById(params.get('id'))
      )).subscribe(
        (resource) => {
          this.book$ = resource;
        }
      );

    //Esse cara traz apenas uma vez;
    // console.log("Index", this.route.snapshot.paramMap.get('id'));
    //Esse cara atualiza, sempre opitar em usá-lo.
    // this.route.paramMap.subscribe(
    //   (params: any) => console.log(+params.get('id'))
    // );
  }


  remove() {
    const params: any = this.route.snapshot.paramMap.get('id');
    this.bookService.remove(+params).subscribe(
      () => {
        this.router.navigate(['books']);
      }
    );

  }

}
