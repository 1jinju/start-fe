// 입력한 id, pw가 맞을 경우엔 success, 아니면 error 출력 
const id = "hello";
const pw = 'world';

function submit(){
    document.querySelector('#form').addEventListener('submit', function(event) {
        // 페이지 새로고침 방지
        event.preventDefault(); 
        
        let $inputId = document.querySelector('input[name="id"]').value;
        let $inputPw = document.querySelector('input[name="pw"]').value;
        let $result = document.getElementById('result');
        
        const result = ($inputId === id && $inputPw === pw) ? 'success' : 'error';
        $result.textContent = result;
        $result.className = result;
    });
}

submit();