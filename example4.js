//파라미터

function welcome(name) {
    console.log('안녕하세요 '+name+'님!')
};

welcome('성은');

function printSquare(x) {
    console.log(x * x);
};

printSquare(2);
printSquare(5);


// 파라미터 실습 -- 내 노트북 용량은?
function teraToGiga(num) {
    console.log(num + 'TB는');
    console.log(num * 1024 + 'GB 입니다.');
  };
  function teraToMega(num) {
    console.log(num + 'TB는');
    console.log(num * 1024 * 1024 + 'MB 입니다.');
  };
  // TB -> GB 테스트
  teraToGiga(2);
  // TB -> MB 테스트
  teraToMega(2);