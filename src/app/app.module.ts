import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component'
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { HeroService } from './hero.service';


@NgModule({
  imports:      [
  		BrowserModule,
  		FormsModule,
      RouterModule.forRoot([
        {
          path: 'heroes' ,
          component: HeroesComponent
        }
      ])
  ],
  declarations: [
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
	],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
