import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule
} from "igniteui-angular";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { SpaceComponent } from "./space/space.component";
import { PlanetComponent } from "./planet/planet.component";
import { PlanetListComponent } from "./planet/planet-list/planet-list.component";
import { PlanetItemComponent } from "./planet/planet-list/planet-item/planet-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { GraphQLModule } from "./graphql.module";

const routes: Routes = [
  { path: "space", component: SpaceComponent },
  { path: "planet", component: PlanetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SpaceComponent,
    PlanetComponent,
    PlanetListComponent,
    PlanetItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: "http://localhost:4000" }),
      cache: new InMemoryCache()
    });
  }
}
