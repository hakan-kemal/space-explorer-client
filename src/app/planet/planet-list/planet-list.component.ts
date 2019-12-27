import { Component, OnInit } from "@angular/core";
// import { Planet } from "../planet.model";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// import image from "../../../../images/galaxy.png";

import gql from "graphql-tag";

import { Launch, Query } from "../planet.model";

@Component({
  selector: "app-planet-list",
  templateUrl: "./planet-list.component.html",
  // styles: [`
  // :host {
  //   display: block;
  //   padding: 32px;
  //   border: 1px solid black;
  //   border-radius: 8px;
  // }
  // `]
  styleUrls: ["./planet-list.component.css"]
})
export class PlanetListComponent implements OnInit {
  // imagePath = image;

  launches: Observable<Launch[]>;
  // planets: Planet[] = [
  //   new Planet(
  //     "Earth",
  //     "Our home planet",
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/768px-Earth_Western_Hemisphere_transparent_background.png"
  //   ),
  //   new Planet(
  //     "Earth",
  //     "Our home planet",
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/768px-Earth_Western_Hemisphere_transparent_background.png"
  //   )
  // ];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.launches = this.apollo
      .watchQuery<Query>({
        query: gql`
          query launches {
            launches {
              id
              site
              rocket {
                name
              }
              mission {
                name
                missionPatch
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.launches));
  }
}
