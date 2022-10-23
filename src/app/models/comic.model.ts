interface ComicDto {
  characters: {};
  creators: {};
  dates: [];
  description: string;
  digitalId: string;
  id: string;
  isbn: string;
  issn: string;
  series: {};
  stories: {};
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: [];
  variants: [];
}

interface Comic extends Omit<ComicDto, 'thumbnail'> {
  image: string;
}

export { ComicDto, Comic };
