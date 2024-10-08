export interface LunarCalendarInforType {
  status: boolean;
  message: string;
  data: LunarDayType;
}

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
  star_info: StarInfo;
  tiet_khi: TietKhi;
}

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

export interface StarInfo {
  name: string;
  good_bad: string;
  direction: string;
  star: string;
  star_content: string;
  five_elements: string;
  should_do: string;
  should_do_not: string;
  exception: string;
  poem: string;
}

export interface TietKhi {
  name: string;
  meaning: string;
  from_date: number;
  to_date: number;
  from_date_format: string;
  to_date_format: string;
}
