const express=require("express");
const app=express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
    var today = new Date();
    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var dayjs  = week[today.getDay()];
    res.render('list.ejs',{
        day:dayjs
    })

})

app.post("/",function(req,res){
    
        console.log(req.body.Task);
        res.send("Banana ki jgh loda lele bsdk");
    
})
app.listen(3000,()=>{
    console.log("Server started on Port : 3000 ");
})