interface Comments {
  id: number;
  text: string;
  like: string;
  case: boolean;
}

export interface Vote {
  vote_text: string[];
  vote_count: number;
  vote_case_left: number;
  vote_case_right: number;
  vote_click: boolean;
}

export interface SlideData {
  poster_path: string;
  text: string;
  posting_date: string;
  id: number;
  vote: Vote;
  like: number;
  comments?: Comments;
}

export interface Data {
  result: SlideData[];
}
