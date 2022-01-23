import { TourismPicture, PointType } from '../types'

export type ScenicSpotTourismInfo = {
  readonly ID: string;
  readonly Name: string;
  readonly ScenicSpotID: string;
  readonly ScenicSpotName: string;
  DescriptionDetail?: string;
  Description?: string;
  Phone?: string;
  Address?: string;
  ZipCode?: string;
  TravelInfo?: string;
  OpenTime?: string;
  readonly Picture: TourismPicture;
  MapUrl?: string;
  Position?: PointType;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  Level?: string;
  WebsiteUrl?: string;
  ParkingInfo?: string;
  ParkingPosition?: PointType;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
  City?: string;
  readonly SrcUpdateTime: string;
  readonly UpdateTime: string;
};
