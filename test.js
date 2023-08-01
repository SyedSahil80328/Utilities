function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function main() {
    console.log("Start");
    await sleep(1000);
    console.log("End");
  }
  
  main();
  