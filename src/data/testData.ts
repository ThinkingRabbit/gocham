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

interface SlideData {
  poster_path: string;
  text: string;
  posting_date: string;
  id: number;
  vote: Vote;
  like: number;
  comments?: Comments;
}

interface Data {
  result: SlideData[];
}

const data: Data = {
  result: [
    {
      poster_path:
        'https://user-images.githubusercontent.com/76567238/221348823-206633b2-52dd-40a0-b808-c42b2f85c4ad.png',

      text: '저 이 신발 300만원 인데 사도 될까요? \n 연봉 10억이에요',
      posting_date: '2022-02-25',
      id: 54,
      vote: {
        vote_count: 421,
        vote_text: ['사자', '사지말자'],
        vote_case_left: 21,
        vote_case_right: 400,
      },
      like: 32,
    },
    {
      poster_path:
        'https://user-images.githubusercontent.com/76567238/221348823-206633b2-52dd-40a0-b808-c42b2f85c4ad.png',

      text: '뭐양',
      posting_date: '2022-01-21',
      id: 55,

      vote: {
        vote_count: 999,
        vote_text: ['주자', '주지말자'],
        vote_case_left: 900,
        vote_case_right: 99,
      },
      like: 45,
    },
    {
      poster_path:
        'https://user-images.githubusercontent.com/76567238/221363571-6891544b-77d1-4eb1-a8ce-144f3aa54c91.png',

      text: '저 이 신발 사촌동생 줄까요?',
      posting_date: '2022-01-21',
      id: 56,

      vote: {
        vote_count: 999,
        vote_text: ['뭐야', '뭘봐'],
        vote_case_left: 900,
        vote_case_right: 99,
      },
      like: 45,
    },
  ],
};

export default data;
