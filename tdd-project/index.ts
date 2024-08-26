import * as app from './src/app';

const main = async () => {
  const result = await app.processHoldsForUser();

  console.log(result.data);
};

main();
