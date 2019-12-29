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
  upcoming: boolean;
  date: number;
  site: string;
  mission: {
    name: string;
    details: string;
    patch: string;
  };
  rocket: {
    id: number;
    name: string;
    type: string;
  };
};

export type Query = {
  launches: Launch[];
};
