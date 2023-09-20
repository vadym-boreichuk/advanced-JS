const chekNumInputs = (selector) => {
  const numItputs = document.querySelectorAll(selector);

  numItputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default chekNumInputs;
