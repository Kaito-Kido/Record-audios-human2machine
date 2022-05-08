from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
@app.route("/", methods = ['GET'])
def translate():
    arr = open("./back-end/convo.json", "r")
    data = json.load(arr)
    return jsonify(data)


app.run()


