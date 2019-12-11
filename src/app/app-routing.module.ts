import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SpaceComponent } from "./space/space.component";
import { PlanetComponent } from "./planet/planet.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "space", component: SpaceComponent },
  { path: "planet", component: PlanetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
