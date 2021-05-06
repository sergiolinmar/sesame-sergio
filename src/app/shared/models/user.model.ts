export enum EUserStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  PAUSED = 'paused'
}

export interface IUser {
  id: string;
  name: string;
  status?: EUserStatus;
  avatar?: string;
}
