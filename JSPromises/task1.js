function delayText(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

delayText("Цей текст виводиться через 5 секунд", 5000);