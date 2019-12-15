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

// export type Course = {
//   id: number;
//   title: string;
//   author: string;
//   description: string;
//   topic: string;
//   url: string;
// };

// export type Query = {
//   allCourses: Course[];
// };

export type Launch = {
  id: number;
  site: string;
};

export type Query = {
  launches: Launch[];
};
