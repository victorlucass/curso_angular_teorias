import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DvdComponent } from './dvd/dvd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/:id', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  //Ele vai redirecionar para 'dvds' sempre q for para a rota raiz.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
