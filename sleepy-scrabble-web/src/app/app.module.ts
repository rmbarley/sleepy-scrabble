import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScoreFormComponent } from './components/score-form/score-form.component';
import { CardContainerComponent } from './containers/card-container/card-container.component';
import { RecentWordCardComponent } from './components/recent-word-card/recent-word-card.component';
import { HighScoreWordCardComponent } from './components/high-score-word-card/high-score-word-card.component';
import { DataPersistence } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ScoreFormComponent,
    CardContainerComponent,
    RecentWordCardComponent,
    HighScoreWordCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataPersistence],
  bootstrap: [AppComponent]
})
export class AppModule {}
