interface SerieDto {
    characters: {};
    creators: {};
    comics: {};
    startYear: string;
    endYear: string;
    rating: string;
    description: string;
    id: string;
    series: {};
    stories: {};
    title: string;
    thumbnail: {
      extension: string;
      path: string;
    };
    urls: [];
    type: string;
}

interface Serie extends Omit<SerieDto, 'thumbnail'> {
    image: string;
}

export {
    SerieDto,
    Serie
}