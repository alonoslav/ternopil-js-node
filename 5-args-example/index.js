const { argv } = process;

const args = argv.slice(2);

args.forEach(arg => console.log(arg));
