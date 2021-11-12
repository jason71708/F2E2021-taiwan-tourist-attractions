import { TourismPicture, PointType } from '../types'

export type ActivityTourismInfo = {
  readonly ID: string
  readonly Name: string
  Description?: string
  DescriptionDetail?: string
  Particpation?: string
  Location?: string
  Address?: string
  Phone?: string
  Organizer?: string
  StartTime?: string
  EndTime?: string
  Cycle?: string
  NonCycle?: string
  WebsiteUrl?: string
  readonly Picture: TourismPicture
  Position?: PointType
  Class1?: string
  Class2?: string
  MapUrl?: string
  TravelInfo?: string
  ParkingInfo?: string
  Charge?: string
  Remarks?: string
  City?: string
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}