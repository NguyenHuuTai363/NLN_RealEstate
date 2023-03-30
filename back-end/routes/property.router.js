const router = require("express").Router();
const Property = require("../models/Property.model")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const multer = require('multer')
const User = require("../models/User.model")

const downloadFile = (filename) => {
  return 'http://localhost:5000/image/' + filename
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

//Create Property
router.post("/upload", upload.single('image'), async (req, res) => {
  try {
    const newProperty = new Property({
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
      country: req.body.country,
      address: req.body.address,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      surface: req.body.surface,
    //  year: req.body.year,
      price: req.body.price,
      //User: req.body.idUser,   
    });
    // console.log("iiiiiiiiiiiiiiiiiiiiii",req.body);
    const savedProperty = await newProperty.save();
    // console.log(savedProperty);
    await User.findOneAndUpdate(
      {_id : req.body.idUser},
      {$push:{
          PropertyList : savedProperty._id
      }});
    res.status(200).json(savedProperty);

  } catch (err) {
    res.status(500).json(err);
  }
});
  
//Update Property
router.put("/update/:id", async (req, res) => {
  try {
    const updatedProp = await Property.findByIdAndUpdate(
      req.params.id, { $set: req.body, }, { new: true }
    );
    console.log(updatedProp);
    res.status(200).json(updatedProp);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Delete Property
router.delete("/delete/:id", async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted...");
  } catch(err) {
    res.status(500).json(err);
  }
});

//Get Property
router.get("/find/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    property.image = downloadFile(property.image);
    res.status(200).json(property);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Get All Property
router.get("/", async (req, res) => {
  //const qNew = req.query.new;
  try {
   // let property;
    // if(qNew) {
    //   property = await Property.find().sort({ createdAd: -1 }).limit(1);
    // } else {
    let property = await Property.find();
    //}
    property.forEach(Element => {
      Element.image = downloadFile(Element.image);
    });
    console.log(property);
    res.status(200).json(property);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get("/search/:search", async(req, res) => {
  const result = await Property.find({
    "$or": [
      { type: {$regex: req.params.search} },
      { name: {$regex: req.params.search} }
    ]
  });
  result.forEach(Element => {
    Element.image = downloadFile(Element.image);
  });
  res.send(result);
})

router.get("/profile/:id", async(req, res) => {
  try {
    await User.findById(req.params.id).populate('PropertyList').exec(function (err, story) {
      if (err) return console.log(err);
      const list = story.PropertyList;
      list.forEach(Element => {
        Element.image = downloadFile(Element.image);
      });
      res.status(200).json(list)
    });
  } catch(err) {
    res.status(200).json(err);
  }
})

module.exports = router;