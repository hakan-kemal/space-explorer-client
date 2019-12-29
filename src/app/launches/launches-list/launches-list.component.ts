import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import gql from "graphql-tag";

import { Launch, Query } from "../launches.model";

@Component({
  selector: "app-launches-list",
  templateUrl: "./launches-list.component.html",
  styleUrls: ["./launches-list.component.css"]
})
export class LaunchesListComponent implements OnInit {
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
              upcoming
              date
              site
              mission {
                name
                details
                patch
              }
              rocket {
                name
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.launches));
  }
}
