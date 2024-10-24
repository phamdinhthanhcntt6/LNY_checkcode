export interface LunarDayType {
  good_hours: GoodHour[];
  bad_hours: BadHour[];
  trach_nhat_lunar_day: string;
  trach_nhat_name: string;
  trach_nhat_meaning: string;
  trach_nhat_description: string;
  truc: string;
  truc_to_do: string;
  truc_not_to_do: string;
  star: string;
  tiet_khi: TietKhi;
  elements: string;
  age_conflict_day: string;
  age_conflict_month: string;
  ly_thuan_phong: LyThuanPhong[];
  good_stars: string;
  bad_stars: string;
  huong_hac_than: string;
  huong_tai_than: string;
  huong_hy_than: string;
}

export type DataResponse<T> = {
  data: T;
  message: string;
  status: boolean;
};
export interface GoodHour {
  id: string;
  name: string;
  from_hour: number;
  to_hour: number;
}

export interface BadHour {
  id: string;
  name: string;
  from_hour: number;
  to_hour: number;
}

export interface TietKhi {
  name: string;
  meaning: string;
  from_date: number;
  to_date: number;
  from_date_format: string;
  to_date_format: string;
}

export interface LyThuanPhong {
  name: string;
  content: string;
  time_start: string;
}
