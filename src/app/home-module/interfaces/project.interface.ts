export interface IUrl {
  name: string;
  url: string;
}

export interface ITech {
  name: string;
}

export interface IProject {
  name: string;
  description: string;
  image: string;
  links: IUrl[];
  techs: ITech[];
}
