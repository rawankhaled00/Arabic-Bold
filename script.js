document.getElementById("boldButton").addEventListener("click", function () {
  let input = document.getElementById("inputText").value;
  let output = document.getElementById("outputText");

  if (input.trim() === "") {
    output.textContent = "⚠️ من فضلك اكتب نص أولًا";
  } else {
    output.textContent = input;
    output.style.fontWeight = "bold"; // يخلي النص عريض
  }
});
