import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = [
    {
      id: 1,
      name: "Angular Youtube Clone Campfire",
      image: "assets/campfire-ui.jpg",
      github: "https://github.com/Fritillary-video/Campfire",
      live: "",
    },
    {
      id: 2,
      name: "Angular Springboot League of Legends Application",
      image: "assets/offmeta.jpg",
      github: "https://github.com/timparka/Off-Meta",
      live: "",
    },
    {
      id: 3,
      name: "",
      image: "",
      github: "",
      live: "",
    },
    {
      id: 4,
      name: "",
      image: "",
      github: "",
      live: "",
    },
  ];

  constructor() {}
}
