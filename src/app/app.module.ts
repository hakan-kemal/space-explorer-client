import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SpaceComponent } from "./space/space.component";
import { PlanetComponent } from "./planet/planet.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GraphQLModule } from "./graphql.module";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "space", component: SpaceComponent },
  { path: "planet", component: PlanetComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, SpaceComponent, PlanetComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    GraphQLModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
