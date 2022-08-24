export interface UsersData {
  data: UserData[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}

export interface UserData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  isInvited?: string;
  last_name: string;
}

export interface Support {
  text: string;
  url: string;
}
