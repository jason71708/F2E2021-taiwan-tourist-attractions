import {
  hotelTypes,
  FetchHotelsRequest,
  FetchHotelsSuccess,
  FetchHotelsSuccessPayload,
  FetchHotelsFailure,
  FetchHotelsFailurePayload
} from './type'
import { TDXAPIParameters } from '../../../api/types'

export const fetchHotelsRequest = (payload: TDXAPIParameters = {}): FetchHotelsRequest => ({
  type: hotelTypes.FETCH_HOTEL_REQUEST,
  payload
})

export const fetchHotelsSuccess = (
  payload: FetchHotelsSuccessPayload
): FetchHotelsSuccess => ({
  type: hotelTypes.FETCH_HOTEL_SUCCESS,
  payload
})

export const fetchHotelsFailure = (
  payload: FetchHotelsFailurePayload
): FetchHotelsFailure => ({
  type: hotelTypes.FETCH_HOTEL_FAILURE,
  payload
})