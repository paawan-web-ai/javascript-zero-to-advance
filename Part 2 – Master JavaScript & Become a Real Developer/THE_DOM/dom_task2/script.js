let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#file-inp");

btn.addEventListener("click", () => {
  fileinp.click();
});

fileinp.addEventListener("change", (val) => {
  //   console.log(val.target.files[0].name);
  let value = val.target.files[0];
  if (value) {
    btn.textContent = value.name;
  }
});
