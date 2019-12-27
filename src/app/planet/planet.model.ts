// export class Planet {
//   public name: string;
//   public description: string;
//   public imagePath: string;

//   constructor(name: string, description: string, imagePath: string) {
//     this.name = name;
//     this.description = description;
//     this.imagePath = imagePath;
//   }
// }

export type Launch = {
  id: number;
  site: string;
  rocket: {
    id: number;
    name: string;
    type: string;
  };
  mission: {
    name: string;
    missionPatch: string;
  };
};

export type Query = {
  launches: Launch[];
};
