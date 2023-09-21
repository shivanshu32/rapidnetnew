// context api data type

export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

// id type
export interface idType {
  id?: number;
}

// brands type
export interface brandsType {
  id?: number;
  img?: any;
}

// show type
export interface showsType {
  id?: number;
  img?: any;
  tag?: string;
  videoUrl?: string;
  category?: string;
  title?: string;
  rating?: any;
  ratingCount?: number;
  days?: string;
  time?: string;
  amPm?: string;
  logo?: any;
}

// blog type
export interface blogsType {
  id?: number;
  img?: any;
  title?: string | undefined;
  description?: string;
  date?: string;
  user?: string;
  network?: string;
  btn?: string;
  delay?: string;
}

// product type
export interface productsType {
  id?: number;
  sale?: string;
  img?: any;
  title?: string | undefined;
  price?: number;
  oldPrice?: number;
  rating?: number;
  ratingCount?: number;
  btn?: string;
  quantity?:number | undefined
}

// product type
export interface menusType {
  id?: number;
  hasDropdown?: boolean;
  title?: string | undefined;
  link?: any;
  submenus?: any;
}

// pricing plan

interface PricingListItemType {
  img?: any;
  list?: string;
}

export interface PricingPlanItemType {
  id?: number;
  img?: any;
  title?: string;
  net?: string;
  speed?: string;
  pricingList?: PricingListItemType[];
  start?: string;
  price?: number;
  time?: string;
}

// home two slider 

export interface HomeTwoSliderType {
  id?: number;
  img?: any;
  title?: string;
  servicesList?: { diley: string; img: any,serviceTitle:string }[];
}

// pricing card 

interface DeviceIcon {
  icon: string;
}

interface PricingListItem {
  title: string;
}

export interface PricingCardType {
  id: number;
  title: string;
  deviceSupport: string;
  devicesIcon: DeviceIcon[];
  pricingList: PricingListItem[];
  price: number;
  time: string;
}
