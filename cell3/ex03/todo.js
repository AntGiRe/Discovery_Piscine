function newTodo()
{
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "100px";
	div.style.color = "black";
	div.innerHTML = prompt("Nuevo To Do:");
	div.className = "todo";

	document.getElementById("ft_list").appendChild(div);
}

document.getElementsByClassName("todo").onclick = function () {

	console.log("a");
};