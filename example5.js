//여러 개의 파라미터
//예제 1 -- 두 개의 숫자를 더하는 함수
function printSum(num1, num2) {
    console.log(num1 + num2);
};

printSum(5, 10);

//예제 2 -- 프로필 출력
function introduce(name, birth, nationality, jog) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + '입니다.');
    console.log('생년월일은 ' + birth + '입니다.');
    console.log('국적은 ' + nationality + '입니다.');
    console.log('직업은 ' + job + '입니다.');
    console.log('잘 부탁드립니다!')
};

introduce('홍길동', '0000.00.00', '한국', '학생');

//실습 -- 나의 체질량 지수는?
function bmiCalculator(name, weight, tall) {
    let bmi = weight / (tall * tall / 10000)
    console.log(name + '님의 체질량지수는 ' + bmi + '입니다.')
  };
  
  // 테스트
  bmiCalculator('홀쭉이', 43.52, 160);
  bmiCalculator('코린이', 61.25, 175);
  bmiCalculator('통통이', 77.76, 180);