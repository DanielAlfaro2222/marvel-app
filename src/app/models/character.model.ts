export interface Character {
  id: number;
  name: string;
  description: string;
  comics: {};
  modified: string;
  url: string;
  series: {};
  stories: {};
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: [];
}
