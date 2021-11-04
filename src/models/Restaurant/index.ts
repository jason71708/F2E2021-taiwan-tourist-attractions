import { TourismPicture, PointType } from '../types'

export type RestaurantTourismInfo = {
  readonly ID: String
  Name?: String
  Description?: String
  Address?: String
  ZipCode?: String
  Phone?: String
  OpenTime?: String
  WebsiteUrl?: String
  Picture?: TourismPicture
  Position?: PointType
  Class?: String
  MapUrl?: String
  ParkingInfo?: String
  City?: String
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}
