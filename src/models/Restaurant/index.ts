import { TourismPicture, PointType } from '../types'

export type RestaurantTourismInfo = {
  readonly ID: string
  Name?: string
  Description?: string
  Address?: string
  ZipCode?: string
  Phone?: string
  OpenTime?: string
  WebsiteUrl?: string
  Picture?: TourismPicture
  Position?: PointType
  Class?: string
  MapUrl?: string
  ParkingInfo?: string
  City?: string
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}
