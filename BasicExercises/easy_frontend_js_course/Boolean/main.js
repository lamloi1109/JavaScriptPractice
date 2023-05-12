function classifyStudent(mark) {
  let rank;
  if (mark > 8) rank = "Ex";
  else if (mark >= 7) rank = "Good";
  else if (mark >= 4) rank = "Not Good";
  else rank = "Bad";
  return rank;
}
function classifyStudentV2(mark) {
  if (mark > 8) return "Ex";
  if (mark >= 7) return "Good";
  if (mark >= 4) return "Not Good";
  return "Bad";
}
