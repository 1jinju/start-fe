// 입력한 id, pw가 맞을 경우엔 success, 아니면 error 출력 
const id = "hello";
const pw = 'world';

function submit(){
    document.getElementById('form').addEventListener('submit', function(event) {
        // 페이지 새로고침 방지
        event.preventDefault(); 
        
        let $inputId = document.getElementsByName('id')[0].value;
        let $inputPw = document.getElementsByName('pw')[0].value;
        let $result = document.getElementById('result');
    
        if ($inputId === id && $inputPw === pw) {
            $result.textContent = 'success';
            $result.className = 'success';
        }
        else {
            $result.textContent = 'error';
            $result.className = 'error';
        }
    });
}

submit();