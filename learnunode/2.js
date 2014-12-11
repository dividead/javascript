var a = process.argv, sum = 0
for (var i = 2; i < a.length; sum+=+a[i++]);
console.log(sum)

