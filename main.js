let insert0 = (number_a) => {
  let kq = number_a < 10 ? `0${number_a}` : `${number_a}`;
  return kq;
};

// Lặp lại sau 1s
function makeRealTime() {
  const now = new Date();
  let hour_now = insert0(now.getHours());
  let minute_now = insert0(now.getMinutes());
  let second_now = insert0(now.getSeconds());

  let realTime_form = document.querySelector(".clock h1");
  console.log(realTime_form);
  realTime_form.innerHTML = `${hour_now}:${minute_now}:${second_now}`;
}

setInterval(makeRealTime, 1000);
