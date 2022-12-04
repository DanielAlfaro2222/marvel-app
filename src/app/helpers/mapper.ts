import { CharacterDto, Character } from '../models/character.model';
import { Comic, ComicDto } from '../models/comic.model';
import { Serie, SerieDto } from '../models/serie.model';

function mappingToCharacter(data: CharacterDto[]): Character[] {
  const result: Character[] = data.map((element) => {
    let character: Character = {
      ...element,
      image: `${element.thumbnail.path}.${element.thumbnail.extension}`,
    };

    return character;
  });

  return result;
}

function mappingToComic(data: ComicDto[]): Comic[] {
  const result: Comic[] = data.map((element) => {
    const comic: Comic = {
      ...element,
      image: `${element.thumbnail.path}.${element.thumbnail.extension}`,
    };

    return comic;
  });

  return result;
}

function mappingToSerie(data: SerieDto[]): Serie[] {
  const result: Serie[] = data.map((element) => {
    const serie: Serie = {
      ...element,
      image: `${element.thumbnail.path}.${element.thumbnail.extension}`,
    };

    return serie;
  });

  return result;
}

export { mappingToCharacter, mappingToComic, mappingToSerie };
