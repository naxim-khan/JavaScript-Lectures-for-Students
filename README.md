<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our JS To-Do App</title>
    <style>
        *{
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        section {
            max-width: 600px;
            margin: auto;
            background: #fff;
            padding: 20px 25px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        input[type="text"] {
            width: calc(100% );
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input:focus{
            outline: none;
            border-color: #28a745;
        }
        .input-group{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        button {
            padding: 12px 15px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #218838;
        }
        ul {
            
            list-style-type: circle;
            padding: 0;
        }
        li{
            font-size: 18px;
            word-spacing:5px;
            padding: 10px;
            margin: 5px 0px;
            background-color: #defceb;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        li:hover {
            background-color: #e2e6ea;
        }
        li:active {
            background-color: #d4edda;
        }
    </style>
</head>
<body>
    <section>
        <h1>To-Do List</h1>
        <div class="input-group">
            <input type="text" id="todo-input" placeholder="Add a new task" required>
            <button id="todo-btn">+</button>
        </div>
        <ul id="todo-list"></ul>
    </section>

    <script>
        let todo_input=document.getElementById("todo-input");
        let todo_list=document.getElementById("todo-list");
        let todo_btn=document.getElementById("todo-btn");

        function addItem() {
            if(todo_input.value.trim() === "") {
                alert("Please enter a task.");
                todo_input.focus();
                return;
            }
            let inputElem = todo_input.value.trim();
            let liElem =  document.createElement("li");
            liElem.setAttribute("title", "Click to remove this item 🚮");

            liElem.textContent = inputElem;
            todo_list.appendChild(liElem);

            todo_input.value = ""; 
            todo_input.focus();

            liElem.addEventListener("click", function() {
                todo_list.removeChild(liElem);
            });
            
        }
        todo_btn.addEventListener("click", ()=>{
            addItem();
        })
        todo_input.addEventListener("keydown", (e)=>{
            if(e.key==="Enter"){
                addItem();
            }
        })
        
    </script>
</body>
</html>
