export const TDX_API_URL = 'https://ptx.transportdata.tw/MOTC'

export type QueryOption = {
  value: null | string,
  label: string
}

export const ScenicSpotPageSeachOptions: QueryOption[] = [
  { value: null, label: '類別' },
  { value: '景點', label: '景點' },
  { value: '活動', label: '活動' }
]

export const AccommodationPageSeachOptions: QueryOption[] = [
  { value: null, label: '類別' },
  { value: '美食', label: '美食' },
  { value: '住宿', label: '住宿' }
]

export const CityOptions: QueryOption[] = [
  { value: null, label: '不分縣市' },
  { value: '臺北市', label: '臺北市' },
  { value: '新北市', label: '新北市' },
  { value: '桃園市', label: '桃園市' },
  { value: '台中市', label: '台中市' },
  { value: '台南市', label: '台南市' },
  { value: '高雄市', label: '高雄市' },
  { value: '基隆市', label: '基隆市' },
  { value: '新竹市', label: '新竹市' },
  { value: '新竹縣', label: '新竹縣' },
  { value: '苗栗縣', label: '苗栗縣' },
  { value: '彰化縣', label: '彰化縣' },
  { value: '南投縣', label: '南投縣' },
  { value: '雲林縣', label: '雲林縣' },
  { value: '嘉義縣', label: '嘉義縣' },
  { value: '嘉義市', label: '嘉義市' },
  { value: '屏東縣', label: '屏東縣' },
  { value: '宜蘭縣', label: '宜蘭縣' },
  { value: '花蓮縣', label: '花蓮縣' },
  { value: '台東縣', label: '台東縣' },
  { value: '金門縣', label: '金門縣' },
  { value: '澎湖縣', label: '澎湖縣' },
  { value: '連江縣', label: '連江縣' }
]

export enum Paths {
  ScenicSpots = '/scenic-spots',
  Accommodations = '/accommodations',
  Traffic = '/traffic'
}