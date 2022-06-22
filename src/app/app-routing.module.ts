import { AuthGuard } from './account/shared/auth.guard';
import { ProdDeleteComponent } from './components/produtos/prod-delete/prod-delete.component';
import { ProdUpdateComponent } from './components/produtos/prod-update/prod-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CrudProdutosComponent } from './view/crud-produtos/crud-produtos.component';
import { ProdCreateComponent } from './components/produtos/prod-create/prod-create.component';
import { CreateLoginComponent } from './components/auth/create-login/create-login.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children: [
			{
				path: "produtos",
				component: CrudProdutosComponent,
			},
			{
				path: "produtos/create",
				component: ProdCreateComponent,
			},
			{
				path: "produtos/update/:id",
				component: ProdUpdateComponent,
			},
			{
				path: "produtos/delete/:id",
				component: ProdDeleteComponent,
			},
		],
		canActivate: [AuthGuard]
	},
	{
		path: "",
    component: HomeComponent,
    children: [
        {path: "", redirectTo: 'login', pathMatch: "full"},
        {path: "login", component: CreateLoginComponent}
    ]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
