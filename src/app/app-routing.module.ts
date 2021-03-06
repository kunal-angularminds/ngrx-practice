import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"counter",
    loadChildren:()=>import("./counter/counter.module").then(m=>m.CounterModule)
  },
  {
    path:"posts",
    component:PostListComponent,
    children:[
      {
        path:"add", component:AddPostComponent
      },
      {
        path:'edit/:id',
        component:EditPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
