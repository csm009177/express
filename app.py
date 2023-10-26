from flask import Flask, request, send_file

app = Flask(__name__)

# 가상 사용자 데이터베이스
users = [
    {'username': 'user1', 'password': 'password1'},
    {'username': 'user2', 'password': 'password2'}
]

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # 사용자 인증 로직: 간단한 리스트를 사용한 검증
    user = next((user for user in users if user['username'] == username and user['password'] == password), None)

    if user:
        # 로그인 성공 시, 인증된 사용자에게 index.html 파일 제공
        return send_file('index.html')
    else:
        return '로그인 실패'

if __name__ == '__main__':
    app.run(port=3000)

