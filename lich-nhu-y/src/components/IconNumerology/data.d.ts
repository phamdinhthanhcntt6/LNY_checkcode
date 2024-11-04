export interface IDataNumerology {
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
  numerology_people: {
    id: string;
    name: string;
    avatar: string;
  };
}

export type DataResponse = {
  data: {
    rows: IDataNumerology[];
    count: number;
  };
  message: string;
  status: boolean;
};
