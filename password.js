// Character sets
const U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const L = "abcdefghijklmnopqrstuvwxyz";
const N = "0123456789";
const Y = "!@#$%^&*";

// Generate random password
function generatePassword(length, useUpper, useLower, useNums, useSyms) {
  let chars = "";
  if (useUpper) chars += U;
  if (useLower) chars += L;
  if (useNums) chars += N;
  if (useSyms) chars += Y;
  if (!chars) return "";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Check strength
function checkStrength(password) {
  let score = 0;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;

  let color = "red", text = "Weak", width = "20%";
  if (score === 3) { color = "orange"; text = "Strong"; width = "60%"; }
  if (score >= 4) { color = "green"; text = "Very Strong"; width = "100%"; }

  return { color, text, width };
}

// Generate button function
function gen() {
  const length = parseInt(document.getElementById("len").value);
  const useUpper = document.getElementById("up").checked;
  const useLower = document.getElementById("low").checked;
  const useNums = document.getElementById("num").checked;
  const useSyms = document.getElementById("sym").checked;

  const password = generatePassword(length, useUpper, useLower, useNums, useSyms);
  document.getElementById("out").value = password;

  const strength = checkStrength(password);
  const bar = document.getElementById("s");
  bar.style.width = strength.width;
  bar.style.background = strength.color;

  document.getElementById("strengthLabel").textContent = "Strength: " + strength.text;
}

// Copy function
function copyP() {
  const out = document.getElementById("out");
  out.select();
  document.execCommand("copy");
  alert("Password copied!");
}

// Update slider number
document.getElementById("len").addEventListener("input", function() {
  document.getElementById("lenVal").textContent = this.value;
});
