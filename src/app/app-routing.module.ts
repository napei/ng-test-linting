import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'test',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./pages/test/test.module').then((m) => m.TestModule),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
