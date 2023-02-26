import data from '../../../data/testData';
import { Data } from '../type';

const RandomGenerator = {
  set(datas: Data) {
    return datas.result.reduce((acc: number[], cur) => {
      acc.push(cur.id);
      return acc;
    }, []);
  },

  run() {
    return this.set(data).sort(() => Math.random() - 0.5);
  },
};

export default RandomGenerator;
