from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def homepage():
    return render_template("index.html")

@app.route("/register", methods=["GET"])
def register():
    return render_template("register.html")

@app.route("/about", methods=["GET"])
def about():
    return render_template("about.html")

@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html")

app.run()