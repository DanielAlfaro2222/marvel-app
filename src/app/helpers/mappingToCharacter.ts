import { map } from 'rxjs';
import { Character } from '../models/character.model';

export function mappingToCharacter(data: any[]): Character[] {
  const result: Character[] = data.map((element) => {
    element.image = `${element.thumbnail.path}.${element.thumbnail.extension}`;

    delete element.thumbnail;

    return element;
  });

  return result;
}
