from flask import Flask, jsonify, request
import pymysql
import os

app = Flask(__name__)
conn = pymysql.connect('localhost', 'root', '', 'task_db')

@app.route('/api/task')
def get_all_task():
    # status = "user_"
    with conn:
        cur = conn.cursor()
        cur.execute("SELECT * FROM task")
        rows = cur.fetchall()
        return jsonify(rows)


@app.route('/api/insert', methods=['POST'])
def insert_task():
    with conn:
        title = request.get_json()['title']
        cur = conn.cursor()
        sql = "INSERT INTO task (title) VALUES (%s)"
        val = [(title)]
        cur.executemany(sql, val)
        conn.commit()
        result = {'title':title}
        # print(cur.rowcount, "record was inserted")        
        # return jsonify(), 200
        return jsonify({"result": result}), 200

# @app.route('/api/update/<id>', methods=['PUT'])
# def update_task(id):
#     with conn:
#         cur = conn.cursor()
#         title = request.get_json()['title']
#         cur.execute("UPDATE task SET title ='" + str(title) + "' where id = " + id)
#         conn.commit()
#         result = {'title':title}
#         return jsonify({"result": result}), 200

# @app.route("/api/delete/<id>", methods=['DELETE'])
# def delete_task(id):
#     with conn:
#         cur = conn.cursor()
#         response = cur.execute("DELETE FROM task where id = " + id)
#         conn.commit()
#         if response > 0:
#             result = {'message' : 'record deleted'}
#         else:
#             result = {'message' : 'no record found'}
#         return jsonify({"result" : result})

@app.route("/api/see", methods=['GET', 'POST'])
def test_api():
    with conn:        
        if request.method == 'POST':
            title = request.get_json()['title']
            cur = conn.cursor()
            sql = "INSERT INTO task (title) VALUES (%s)"
            val = [(title)]
            cur.execute(sql, val)
            conn.commit()
            result = {'title' : title}
            return jsonify({"result" : result}), 200
        else:
            cur = conn.cursor()
            cur.execute("SELECT * FROM task")
            rows = cur.fetchall()
            return jsonify(rows)

@app.route("/api/see/<id>", methods=['PUT', 'DELETE'])
def test_api_fix(id):
    with conn:
        if request.method == 'PUT':            
            cur = conn.cursor()
            title = request.get_json()['title']
            cur.execute("UPDATE task SET title ='" + str(title) + "' where id =" + id)
            conn.commit()
            result = {'title' : title}
            return jsonify({'result' : result}), 200
        else:
            cur = conn.cursor()
            response = cur.execute("DELETE FROM task where id = " + id)
            conn.commit()
            if response > 0:
                result = {'message' : 'record delete'}
            else:
                result = {'message' : 'no record fond'}
            return jsonify({"result" : result})


if __name__ == '__main__':
    app.run(debug=True)