import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import gql from "graphql-tag";

import { Launch, Query } from "../launches.model";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"]
})
export class LaunchDetailsComponent implements OnInit {
  launches: Observable<Launch[]>;

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
