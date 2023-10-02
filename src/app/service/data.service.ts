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
      image: "assets/offmetafe.jpg",
      github: "https://github.com/timparka/Off-Meta",
      live: "http://timparkaoffmetafe.s3-website-us-east-1.amazonaws.com/",
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
