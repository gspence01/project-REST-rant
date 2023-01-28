const router = require('express').Router();
const db = require('../models')

//Rendering the index page
router.get('/', (req, res)=>{
    db.Place.find()
    .then((places =>{
        res.render('places/index', { places })
    }))
    .catch(err =>{
        console.log(err)
        res.render('error404')
    })
})

//Posting any new places created
router.post('/', (req, res)=>{
    if(req.body.city === ''){
        req.body.city = undefined;
    }
    if(req.body.state === ''){
        req.body.state = undefined;
    }
    if(req.body.pic === ''){
        req.body.pic = undefined;
    }
    db.Place.create(req.body)
    .then(() =>{
        res.redirect('/places')
    })
    .catch(err =>{
        if(err && err.name === 'ValidationError'){
            let message = 'Validation Error: invalid date!'
            res.render('places/new', { message })
        }
        else{
            res.render('error404')
        }
    })
})

router.get('/new', (req, res)=>{
    res.render('places/new')
})

router.get('/:id', (req, res)=>{
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/:id/edit', (req, res)=>{
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', {place})
    })
    .catch(err => {
        console.log("err", err)
        res.render('error404')
    })
})


router.put('/:id', (req, res)=>{
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err =>{
        console.log('err', err)
        res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.post('/:id/comment', (req, res)=>{
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
    .then(place =>{
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(()=> {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.delete('/:id/rant/:rantID', (req, res)=>{
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router