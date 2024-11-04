export interface IDataNumerology {
  content: string;
  description: string;
  id: string;
  image: string;
  internal_id: number;
  name: string;
  title: string;
  avatar: string;
  numerology_people: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

export type DataResponse = {
  data: IDataNumerology;
  message: string;
  status: boolean;
};
