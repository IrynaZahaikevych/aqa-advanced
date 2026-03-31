function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Аргументи мають бути числами");
  }

  if (denominator === 0) {
    throw new Error("На нуль ділити не можна");
  }

  return numerator / denominator;
}

function testDivide(a, b) {
  try {
    const result = divide(a, b);
    console.log(`Результат: ${result}`);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  } finally {
    console.log("Робота завершена");
  }
}

testDivide(44, 2);
testDivide(57, 0);
testDivide(30, "89");