const express = require('express');
const app = express();

const usersData = [
	{name: "Ayman"},
	{name: "Mark"}
]
app.get('./users', (req, res) => {
	res.json({
		success: true,
		message: "Successfully Got users, Nice",
		users: usersData
	})
})



app.listen(8000, () => {
	console.log("Server is Running.")
})