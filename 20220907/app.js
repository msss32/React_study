// AWS EC2
// 1. EC2 ubuntu로 인스턴스
// AWS 페이지에 로그인하고 서비스 탭 옆에 옆에 EC2 검색
// EC2
// 클라우드의 가상 서버 뜸
// 오른쪽 상단에 아이디 옆에 리전은 최대한 가깝게 설정
// 한국이 안될 때 거의 일본씀
// 인스턴스 클릭해서 인스턴스 창으로 이동
// 인스턴스 안쓰면 중지!

// 인스터스 이름, 우분투 클릭
// 프리티어 사용가능 여부 확인

// 키페어 생성 해서 잘 보관!
// 이동시에 저장매체에 담아서 옮기는게 보안에 좋음
// 연결방법 vs 코드에서 아니면 터미널에서
// ssh -i "Dori_key.pem" ubuntu@ec2-43-201-14-149.ap-northeast-2.compute.amazonaws.com

// 우분투에 mysql 인스턴스에 설치
// mysql 설치 명령어
// 우분투 서버를 업데이트하고 그리고 mysql-server 설치
// sudo apt-get update
// sudo apt-get install mysql-server

// EC2 우분투 mysql 접속
// sudo mysql -u root -p
// 비밀번호 입력창 뜨면 그냥 엔터

// 데이터베이스 세팅
// 1. 사용할 데이터 베이스 하나 만들어주고
// create database 여기에 이름

// 데이터베이스 확인
// show databases;

// 데이터베이스 사용을 위해 유저 만들어서 사용
// 접속할때 유저 정보가 있어야 접속이 가능하니까
// 사용할 유저 생성
// create user "여기에 유저이름"@"%" identified by "비밀번호";
// create user "doriAdmin"@"%" identified by "admin456";

// 만든 유저에게 데이터 베이스 권한 부여
// grant all on 데이터베이스 이름.(이름뒤에 점)* to "유저이름"@"%";
// grant all on doridb. * to "doriAdmin"@"%";

// 권한 생겼는지 확인
// show grants for "유저 이름"
// show grants for "doriAdmin"

// 트래픽에 네트워크 간에 이동 방향을 말하는 것
// 인바운드 규칙 : 네트워크에 들어오는 정보
// 클라이언트에서 서버로 향하는 것

// 아웃바운드 규칙 : 네트워크에서 나가는 정보
// 클라이언트에서 요청을 하고 서버에서 클라이언트로 다시 보내주는 것

// 보안규칙 추가에 인바운드, 아웃바운드
// HTTP, HTTPS, MYSQL 모두 추가

// 보안 그룹 규칙설정을 끝냈으면 EC2에 설치한 MYSQL 접속 허용 설정
// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
// 수정모드는 i
// :wq! = 저장 후 종료
// :q! = 종료
// :w! = 강제저장

// 이 파일에서 수정할 부분은 bind-address의 127.0.0.1 부분을
// 0.0.0.0 이렇게 설정해주면 됨

// mysql 서버 재실행
// sudo service mysql restart

// 외부접속 완료

// 로컬에 워크벤치 켜고
// connection 추가
// connection 옵션은 hostname에 인스턴스 퍼블릭 IPv44 DNS 주소 입력

// port는 3306번
// username은 접속할 유저 이름(권한 부여된)
// password는 store in valut 버튼눌러서 mysql 비밀번호 입력
// 잘되면 mysql화면이 보임 보이는 화면은 우리가 만든 ec2 우분투에 설치한 mysql

// 프로젝트 EC2 우분투에 설치하기
// 본인이 올릴 프로젝트를 깃허브에 올리고
// config.js 잘 확인하고 데이터 베이스 이름과 비밀번호 유저 이름을
// EC2 우분투에 설치한 mysql의 접속 옵션과 동일하게 바꿔줌
// 인스턴스에 git init하고
// git remote add origin https://github.com/msss32/TeamProject_Hide-Seek.git

// sudo apt-get update
// sudo apt-get install -y build-essential
// sudo apt-get install curl

// 원하는 노드버전
// curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --

// nodejs 설치
// sudo apt-get install -y nodejs

// node 버전 확인 node -v
// npm 버전 확인 npm -v

// EC2 포트포워딩
// 뒤에 포트번호 안보이게 접속

// http 80, https 443

// 명령어
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 7000
// dport 80, --to-port 3000 = 80포트로 접속하면 300포트로 재매핑

// 포트포워딩을 확인하는 명령어
// sudo iptables -t nat -L --line-numbers
