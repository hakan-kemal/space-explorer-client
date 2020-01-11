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
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
// import { NavigationComponent } from "./navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { LaunchesComponent } from "./launches/launches.component";
import { LaunchesListComponent } from "./launches/launches-list/launches-list.component";
import { LaunchDetailsComponent } from "./launches/launch-details/launch-details.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: "launches", component: LaunchesComponent },
  { path: "launches/:id", component: LaunchDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    HomeComponent,
    LaunchesComponent,
    LaunchesListComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
