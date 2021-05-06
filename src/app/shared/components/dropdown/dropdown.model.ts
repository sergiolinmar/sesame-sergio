import { IUser } from "../../models/user.model";

export enum EDropdownTypes {
  USER_ACCOUNT = 'USER_ACCOUNT'
}

export interface IDropdownConfig {
  items: {
    label: string;
    fn?: () => void;
    items?: {
      label?: string;
      fn?: () => void;
      type?: EDropdownTypes;
      extra?: {
        user?: IUser;
        timeToday?: Date;
      }
    }[];
  }[]
}
