function addTogether() {
  const args = Array.prototype.slice.call(arguments);

  if (!args.every(arg => typeof arg === 'number')) {
    return undefined;

  } else if (args.length === 2) {
    return args[0] + args[1];

  } else {
    const firstArg = args[0],
      callAnotherFunc = (secondArg =>
        addTogether(firstArg, secondArg)
      );
    return callAnotherFunc;
  }
}

addTogether(2, 3);