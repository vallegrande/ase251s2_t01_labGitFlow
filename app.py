from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# dev3 - Endpoint de correo
@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    print(f"Enviando correo desde {email}: {message}")
    return jsonify({'status': 'success', 'message': 'Correo enviado'}), 200

if __name__ == "__main__":
    app.run(debug=True)