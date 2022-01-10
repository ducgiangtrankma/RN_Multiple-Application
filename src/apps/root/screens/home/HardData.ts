import {CommAppScreen} from '../../utils/const';

export interface App {
  title: string;
  route: any;
  icon: any;
  type: AppType;
  category: string;
}
export enum AppType {
  LINK = 'LINK',
  NAVIGATE = 'NAVIGATE',
}
export const ListApp: App[] = [
  {
    title: 'App1',
    route: CommAppScreen.App1,
    icon: null,
    type: AppType.NAVIGATE,
    category: 'Thử nghiệm ứng dụng 1',
  },
  {
    title: 'App2',
    route: CommAppScreen.App2,
    icon: null,
    type: AppType.NAVIGATE,
    category: 'Thử nghiệm ứng dụng 2',
  },
  {
    title: 'App3',
    route: CommAppScreen.App2,
    icon: null,
    type: AppType.NAVIGATE,
    category: 'Thử nghiệm ứng dụng 3',
  },
];
