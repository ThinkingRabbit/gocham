interface Comments {
  id: number;
  text: string;
  like: string;
  case: boolean;
}

interface Vote {
  vote_text: string[];
  vote_count: number;
  vote_case_left: number;
  vote_case_right: number;
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
