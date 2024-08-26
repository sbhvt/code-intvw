import * as app from './src/app';

const main = async () => {
  const result = await app.helloWorldAsync();

  console.log(result.data);
};

main();
