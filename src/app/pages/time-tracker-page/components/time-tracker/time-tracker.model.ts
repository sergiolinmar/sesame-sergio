import { IDropdownConfig } from "src/app/shared/components/dropdown/dropdown.model";
import { IUser } from "src/app/shared/models/user.model";

export interface ITimeTrackerConfig {
  user: IUser,
  dropdown: IDropdownConfig,
  timeTracker: {
    actualTime: string,
    totalTime: string
  }
}
