document.getElementById('boldButton').addEventListener('click', function() {
  let input = document.getElementById('inputText').value;
  let output = document.getElementById('outputText');
  let copyBtn = document.getElementById('copyButton');

  if (input.trim() === '') {
    output.textContent = "⚠️ من فضلك اكتب نص أولًا";
    copyBtn.style.display = "none";
  } else {
    output.textContent = input;
    output.style.fontWeight = 'bold'; // يخلي النص عريض
    copyBtn.style.display = "inline-block";
  }
});

document.getElementById('copyButton').addEventListener('click', function() {
  let textToCopy = document.getElementById('outputText').textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("✅ تم نسخ النص!");
  });
});
