import { HotelTourismInfo } from '../../../models/Hotel'
import { TDXAPIParameters } from '../../../api/types'

export enum hotelTypes {
  FETCH_HOTEL_REQUEST = 'FETCH_HOTEL_REQUEST',
  FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS',
  FETCH_HOTEL_FAILURE = 'FETCH_HOTEL_FAILURE'
}

export type HotelsState = {
  pending: boolean
  hotels: HotelTourismInfo[]
  error: string | null
}

export type FetchHotelsSuccessPayload = {
  hotels: HotelTourismInfo[]
}

export type FetchHotelsFailurePayload = {
  error: string
}

export type FetchHotelsRequest = {
  type: hotelTypes.FETCH_HOTEL_REQUEST
  payload: TDXAPIParameters
}

export type FetchHotelsSuccess = {
  type: hotelTypes.FETCH_HOTEL_SUCCESS
  payload: FetchHotelsSuccessPayload
}

export type FetchHotelsFailure = {
  type: hotelTypes.FETCH_HOTEL_FAILURE
  payload: FetchHotelsFailurePayload
}

export type HotelsActions =
  | FetchHotelsRequest
  | FetchHotelsSuccess
  | FetchHotelsFailure