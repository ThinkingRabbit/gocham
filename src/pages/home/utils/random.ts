import { Data } from '../type';

const RandomGenerator = {
  set(datas: Data) {
    return datas.result.reduce((acc: number[], cur) => {
      acc.push(cur.id);
      return acc;
    }, []);
  },

  run(datas: Data) {
    return this.set(datas).sort(() => Math.random() - 0.5);
  },
};

export default RandomGenerator;
