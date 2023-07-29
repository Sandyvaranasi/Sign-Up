const router = require("express").Router();
const collection = [{}]
let otp = undefined
const currentData = []

router.get('/test',(req,res)=>{
 res.send("Hello world")
})

router.post('/signup',(req,res)=>{
    //here we will use db queries for uniqueness of elements and also can validate them.
    const notUnique = collection.filter(data=>data.email==req.body.email||data.username==req.body.username)

    if(notUnique.length!==0){
        if(notUnique[0].email==req.body.email) return res.status(400).json({message:"Email already taken"})
        else return res.status(400).json({message:"Username already taken"})
    }

    // similarly we can check validations too
    //at last we shall redirect to otp page and match send the otp using any library.
    otp = Math.floor(Math.random()*10000)

    console.log(otp);

    return res.send({OTP:otp})
    
})


router.post('/varify',(req,res)=>{
    
    console.log(otp);
    const OTP = req.body.otp

    if(!OTP) return res.status(400).send({message:"OTP required"})

    if(OTP!= otp) return res.status(401).send({message:"Invalid OTP"})

    collection.push(currentData)

    return res.status(201).json({message:"Success !!!"})

    otp = undefined
    currentData.pop()
    
})

module.exports = router