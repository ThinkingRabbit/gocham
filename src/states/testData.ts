import { Data, SlideData } from '../pages/home/type';
import { atom } from 'recoil';

export const lastIdx = atom({
  key: 'lastIdx',
  default: 62,
});

export const testData = atom({
  key: 'testData',
  default: {
    result: [
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221376420-ee96140e-170c-4357-996b-9c7fcf9252e0.png',

        text: 'A? B?',
        posting_date: '2022-02-25',
        id: 54,
        vote: {
          vote_count: 421,
          vote_text: ['A', 'B'],
          vote_case_left: 21,
          vote_case_right: 400,
          vote_click: false,
        },
        like: 32,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221348823-206633b2-52dd-40a0-b808-c42b2f85c4ad.png',

        text: '이거신발 동생줄려고하는데 줄까요?',
        posting_date: '2022-01-21',
        id: 55,

        vote: {
          vote_count: 999,
          vote_text: ['주자', '주지말자'],
          vote_case_left: 900,
          vote_case_right: 99,
          vote_click: false,
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
          vote_text: ['주자', '주지말자'],
          vote_case_left: 900,
          vote_case_right: 99,
          vote_click: false,
        },
        like: 45,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221366166-16e666c2-aebe-47e8-9087-4d8ef66aff38.png',

        text: '흰색 검은색? 빨리골라줘! ',
        posting_date: '2022-02-25',
        id: 58,
        vote: {
          vote_count: 1333,
          vote_text: ['흰색', '검은색'],
          vote_case_left: 33,
          vote_case_right: 1300,
          vote_click: false,
        },
        like: 52,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221370169-67d03c7e-cbef-45b7-a08c-61eae9a152d9.png',

        text: '두 번째? 세 번재 ? ',
        posting_date: '2022-03-43',
        id: 59,
        vote: {
          vote_count: 5233,
          vote_text: ['두 번째', '세 번재 '],
          vote_case_left: 5000,
          vote_case_right: 233,
          vote_click: false,
        },
        like: 52,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221371397-192d1ddd-1d61-4778-a282-c8e0f752810a.png',

        text: '이거 중고나라에 3400에 올라왔는데 사? 말어?',
        posting_date: '2022-03-43',
        id: 60,
        vote: {
          vote_count: 7233,
          vote_text: ['사', '사지마'],
          vote_case_left: 7000,
          vote_case_right: 233,
          vote_click: false,
        },
        like: 252,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221376368-166214d4-a37b-4eae-8dfc-91c8312e975b.png',

        text: 'A? B?',
        posting_date: '2022-01-43',
        id: 61,
        vote: {
          vote_count: 11300,
          vote_text: ['A', 'B'],
          vote_case_left: 5640,
          vote_case_right: 5700,
          vote_click: false,
        },
        like: 3252,
      },
      {
        poster_path:
          'https://user-images.githubusercontent.com/76567238/221549245-124e8c6c-b0c3-4cb6-86b5-a72b6f5b0a3d.png',

        text: '이번에 예비 고2인데 이거 안 풀리는 데 정답이 4번인가요?  5번인가요 ?',
        posting_date: '2022-01-43',
        id: 523,
        vote: {
          vote_count: 520,
          vote_text: ['4', '5'],
          vote_case_left: 220,
          vote_case_right: 300,
          vote_click: false,
        },
        like: 3212,
      },
    ],
  },
});
