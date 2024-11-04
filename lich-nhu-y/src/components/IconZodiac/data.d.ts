export interface IDataZodiac {
  id: string;
  name: string;
  internal_id: number;
  from_date: number;
  to_date: number;
  title: string;
  description: string;
  content: string;
  image: string;
  created_at: string;
  zodiac_people: {
    id: string;
    name: string;
    avatar: string;
  };
}

export type DataResponse = {
  data: {
    rows: IDataZodiac[];
    count: number;
  };
  message: string;
  status: boolean;
};
