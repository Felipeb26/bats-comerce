import { CacheResolverService } from './components/cache/cache-resolver.service';
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./view/home/home.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { CrudProdutosComponent } from "./view/crud-produtos/crud-produtos.component";
import { ProdCreateComponent } from "./components/produtos/prod-create/prod-create.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProdReadComponent } from "./components/produtos/prod-read/prod-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProdUpdateComponent } from "./components/produtos/prod-update/prod-update.component";
import { ProdDeleteComponent } from "./components/produtos/prod-delete/prod-delete.component";
import { AuthenticationComponent } from "./components/auth/authentication/authentication.component";
import { CreateLoginComponent } from "./components/auth/create-login/create-login.component";
import { NgxMaskModule,IConfig } from 'ngx-mask';
import { ProdWishlistComponent } from './components/produtos/prod-wishlist/prod-wishlist.component';
import { AboutComponent } from './components/template/about/about.component'
import { CacheInterceptorService } from './components/interceptors/cache-interceptor.service';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NavComponent,
		HomeComponent,
		CrudProdutosComponent,
		ProdCreateComponent,
		ProdReadComponent,
		ProdUpdateComponent,
		ProdDeleteComponent,
		CreateLoginComponent,
		AuthenticationComponent,
  		ProdWishlistComponent,
  		AboutComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatSnackBarModule,
		HttpClientModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		ReactiveFormsModule,
		NgxMaskModule.forRoot(),
		FontAwesomeModule,
		MatProgressSpinnerModule
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "pt-BR",
		},
		CacheResolverService,{
			provide: HTTP_INTERCEPTORS,
			useClass: CacheInterceptorService,
			multi: true,
		}
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
