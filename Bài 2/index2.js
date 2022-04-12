function alternatingSums(arr) {
    return arr.reduce((num, n, i) => {
      num[i % 2] += n;
      return num;
    }, [0, 0]);
  }
  
  let arr1 = [25, 36, 48, 98, 12, 88, 71, 62];
  let result = alternatingSums(arr1);
  console.log("Ket qua bai 2: ", result)