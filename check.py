from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

employees = []
clock_records = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    employees.append(data)
    return jsonify({'message': 'Register success'})

@app.route('/clockin', methods=['POST'])
def clockin():
    data = request.get_json()
    clock_records.append(data)
    return jsonify({'message': 'Clock in success'})

@app.route('/query', methods=['GET'])
def query():
    return jsonify({'clock_records': clock_records})

if __name__ == '__main__':
    app.run(debug=True)

print("fix the problem")