export interface Player {
  id: string;
  name: string;
  jersey: string;
  rating: string;
  allstar: boolean;
}

export const emptyPlayer = {
  id: '',
  name: '',
  jersey: '',
  rating: '',
  allstar: false,
};
