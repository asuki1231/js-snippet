//confirm: OK / キャンセルのダイアログを表示
const btn = document.querySelector("button");
btn.addEventListener("click", event => {
  const question = confirm("Question");
  document.querySelector(".log").innerHTML = question;
});
