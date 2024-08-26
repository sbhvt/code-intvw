import * as app from './src/app';

const main = async () => {
  console.log(app.helloWorld());
  const awaitHello = await app.helloWorldAsync();

  console.log(awaitHello.data);
};

main();
