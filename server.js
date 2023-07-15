const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');


let initalize_path = path.join(__dirname,"public");

const app = express();
app.use(express.static(initalize_path));
app.use(fileupload());

app.get('/', (req , res)=>{
	res.sendFile(path.join(initalize_path, "home.html"));
})

app.get('/editor',(req,res)=>{
	res.sendFile(path.join(initalize_path,"editor.html"));
})

app.post('/upload', (req ,res)=>{
	let file = req.files.image;
	let date = new Date();
	let imagename = date.getDate()+date.getTime()+file.name;
	let path = 'public/uploads/images/' + imagename;

	file.mv(path,(err,result)=>{
		if(err){
			throw err;
		}else{
			res.json(`uploads/images/${imagename}`)
		}
	})
})

app.get('/:blog',(req,res)=>{
	res.sendFile(path.join(initalize_path,"blog.html"));
})

app.use((req,res)=>{
	res.json("404");
})
app.listen("3000",()=>{
	console.log('listening.................');
})