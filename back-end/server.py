from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route("/", methods=['GET'])
def translate():
    data = [
        "Hello, how can i help you?",
        "What's your name?",
        "My name is Robot.",
        "Thanks.",
        "You are welcome."
    ]
    dataVi = [
        "Xin chao, ban can gi o toi?",
        "Ten ban la gi?",
        "Ten toi la Robot",
        "Xin cam on",
        "Khong co chi"
    ]
    lan = str(request.args.get('lan'))
    if lan == "English":
        return jsonify(data)
    elif lan == "VietNam":
        return jsonify(dataVi)
    else:
        return jsonify(data)


app.run()
