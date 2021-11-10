export const TDX_API_URL = 'https://ptx.transportdata.tw/MOTC'

export type QueryOption = {
  value: null | string,
  label: string
}

export const ScenicSpotPageSeachOptions: QueryOption[] = [
  { value: null, label: '全部類別' },
  { value: '景點', label: '景點' },
  { value: '活動', label: '活動' }
]

export const AccommodationPageSeachOptions: QueryOption[] = [
  { value: null, label: '全部類別' },
  { value: '美食', label: '美食' },
  { value: '住宿', label: '住宿' }
]

export const cityOptions: QueryOption[] = [
  { value: null, label: '不分縣市' },
  { value: 'Taipei', label: '台北市' },
  { value: 'NewTaipei', label: '新北市' },
  { value: 'Taoyuan', label: '桃園市' },
  { value: 'Taichung', label: '台中市' },
  { value: 'Tainan', label: '台南市' },
  { value: 'Kaohsiung', label: '高雄市' },
  { value: 'Keelung', label: '基隆市' },
  { value: 'Hsinchu', label: '新竹市' },
  { value: 'HsinchuCounty', label: '新竹縣' },
  { value: 'MiaoliCounty', label: '苗栗縣' },
  { value: 'ChanghuaCounty', label: '彰化縣' },
  { value: 'NantouCounty', label: '南投縣' },
  { value: 'YunlinCounty', label: '雲林縣' },
  { value: 'ChiayiCounty', label: '嘉義縣' },
  { value: 'Chiayi', label: '嘉義市' },
  { value: 'PingtungCounty', label: '屏東縣' },
  { value: 'YilanCounty', label: '宜蘭縣' },
  { value: 'HualienCounty', label: '花蓮縣' },
  { value: 'TaitungCounty', label: '台東縣' },
  { value: 'KinmenCounty', label: '金門縣' },
  { value: 'PenghuCounty', label: '澎湖縣' },
  { value: 'LienchiangCounty', label: '連江縣' }
]

export const famousCities = [
  '台北市',
  '新北市',
  '桃園市',
  '台中市',
  '台南市',
  '高雄市',
  '新竹市',
  '南投縣',
  '嘉義市',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '金門縣'
]

export enum Paths {
  ScenicSpots = '/scenic-spots',
  Accommodations = '/accommodations',
  Traffic = '/traffic'
}

export enum Shapes {
  Triangle = 'Triangle',
  Square = 'Square',
  Circle = 'Circle'
}

export const generateStaticImagePath = (name: string, type: string) => `/images/${name}.${type}`