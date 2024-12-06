from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/", methods=["GET"])
def homepage():
    return "<h1>Hello CodeWala :)</h1>"

@app.route("/home", methods=["GET"])
def frontend():
    return render_template("index.html")

database = []
@app.route("/reg_data", methods=["POST"])
def get_reg_data():
    user = {}
    name = request.form["u_name"]
    email = request.form["u_email"]
    phone = request.form["u_num"]
    password = request.form["u_pwd"]

    user["user_name"] = name
    user["user_email"] = email
    user["user_phone"] = phone
    user["user_pwd"] = password
    database.append(user)
    return redirect("/home")

@app.route("/lgn_data", methods=["POST"])
def get_lgn_data():
    log_email = request.form["u_email"]
    log_password = request.form["u_pwd"]

    for user in range(len(database)):
        email = database[user]["user_email"]
        pwd = database[user]["user_pwd"]

        if log_email == email and log_password == pwd:
            return "Login Successfull :)"
    else:
        return "Invalid Credentials :("

@app.route("/view", methods=["GET"])
def view_database():
    return database


app.run(debug=True)