import { TourismPicture, PointType } from '../types'

export type HotelTourismInfo = {
  readonly ID: string;
  readonly Name: string;
  readonly HotelID: string;
  readonly HotelName: string;
  Description?: string;
  DescriptionDetail?: string;
  Grade?: string;
  Address?: string;
  ZipCode?: string;
  Phone?: string;
  Fax?: string;
  WebsiteUrl?: string;
  readonly Picture: TourismPicture;
  Position?: PointType;
  Class?: string;
  MapUrl?: string;
  Spec?: string;
  ServiceInfo?: string;
  ParkingInfo?: string;
  City?: string;
  readonly SrcUpdateTime: string;
  readonly UpdateTime: string;
};