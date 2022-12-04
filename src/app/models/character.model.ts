interface CharacterDto {
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

interface Character extends Omit<CharacterDto, 'thumbnail'> {
  image: string;
}

export { CharacterDto, Character };
