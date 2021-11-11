import { TourismPicture, PointType } from '../types'

export type RestaurantTourismInfo = {
  readonly ID: string
  readonly Name: string
  Description?: string
  DescriptionDetail?: string
  Address?: string
  ZipCode?: string
  Phone?: string
  OpenTime?: string
  WebsiteUrl?: string
  readonly Picture: TourismPicture
  Position?: PointType
  Class?: string
  MapUrl?: string
  ParkingInfo?: string
  City?: string
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}
