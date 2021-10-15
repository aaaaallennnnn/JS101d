function multisum(range) {
  if(range <= 2) return 0;
  let sum = 0;
  for(let i = 3; i <= range; i++){
    if(!(i%3) || !(i%5)) sum += i;
  }
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168