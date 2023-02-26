import { atom } from 'recoil';

export const newWriteTitle = atom({
  key: 'newWriteTitle',
  default: '',
});

export const newWriteContent = atom({
  key: 'newWriteContent',
  default: '',
});

export const newWritLeftButtonCustom = atom({
  key: 'newWritLeftButtonCustom',
  default: '',
});

export const newWriteRightButtonCustom = atom({
  key: 'newWriteRightButtonCustom',
  default: '',
});

export const newWriteFiles = atom({
  key: 'newWriteFiles',
  default: [],
});

export const newWriteSave = atom({
  key: 'newWriteSave',
  default: false,
});
