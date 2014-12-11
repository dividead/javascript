var s = '# ', n = 4;
for (var i = 1; i < n; i++){
  s = s + '# ';
}
for (var i = 1; i < n; i++){
  console.log(s);
  console.log(s.split("").reverse().join(""));
}
