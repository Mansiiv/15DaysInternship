var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'review'
});

//connect database
connection.connect(function(err){
  if(!err){
    console.log('Database Connected');
  }else{
    console.log('Database not connected');
  }
})


/* GET home page. */

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/', function(req, res, next) {
  res.render('master');
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.get('/feedback', function(req, res, next) {
  res.render('feedback');
});

//Display Route
router.get('/display', function(req, res, next) {
  connection.query("select * from tbl_review",function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.render('display',{db_rows_array:db_rows});
  })
});

//Delete route
router.get('/delete/:id', function(req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_review where review_id=?",[deleteid],function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.redirect('/display');
  })
});

//Edit route
router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  console.log(editid);
  connection.query("select * from tbl_review where review_id=?",[editid],function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.render('edit',{db_rows_array:db_rows});
  })
});

//Route post
router.post('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  var review_name= req.body.name;
  var review_email= req.body.email;
  var review_rating= req.body.rating;
  
  connection.query("update tbl_review set review_name =? ,review_email=?, review_rating=? where review_id=?",[review_name,review_email,review_rating,editid],function(err,db_rows){
  if(err) throw err;
    res.redirect('/display');
  });
});

//Insert Data
router.post('/form-process', function(req, res, next) {
  // var name = req.body.name;
  // var email = req.body.email;
  // var rating = req.body.rating;
   // res.render('feedback',{mya:name});
  
  console.log(req.body);
 
  const mybodydata = {
    review_name : req.body.name,
    review_email : req.body.email,
    review_rating : req.body.rating

  }
  connection.query("insert into tbl_review set ?", mybodydata,function(err,result){
    if(err)throw err;
    res.redirect('/feedback')
  })

});



module.exports = router;
