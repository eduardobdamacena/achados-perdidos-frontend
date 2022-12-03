import { PlaceInterface } from './PlaceInterface';
import { UserInterface } from './UserInterface';

export interface UserPlaceInterface extends PlaceInterface {
    usuario: UserInterface;
}
