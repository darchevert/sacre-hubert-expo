var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://yoannherlaut:azerty@ds147469.mlab.com:47469/sacre-hubert',
    options,
    function(err) {
     console.log(err);
    }
);
const punchlines = [
  {
    punchline: "OSS117! Pour vous servir!",
    name: "Lucien Bramard / OSS117",
    sound: "../assets/sounds/oss117pourvousservir",
    photo: '../assets/images/oss117.png'
  }, {
    punchline: "Fais moi l'amour... Pas envie!",
    name: "Princesse Al Tarouk",
    photo: "../assets/images/aure_atika.jpg",
    sound: "../assets/sounds/faismoilamourpasenvie"
  }, {
    punchline: "Viens crotale! Quelques heures!",
    name: "Princesse Al Tarouk",
    photo: "../assets/images/aure_atika.jpg",
    sound: "../assets/sounds/vienscrotalequelquesheures"
  }, {
    punchline: "Comment est votre blanquette?",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/commentblanquettebonne"
  }, {
    punchline: "Hareng pomme à l'huile",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/harengramequin"
  }, {
    punchline: "C'est cocasse!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/cocasse"
  }, {
    punchline: "J'aime les panoramas",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/jaimelespanoramas"
  }, {
    punchline: "Des millions?!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/desmillions"
  }, {
    punchline: "Qui êtes-vous?!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/quietesvous"
  }, {
    punchline: "C'est Monsieur René Coty",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/renecoty"
  }, {
    punchline: "J'aime me beurrer la biscotte",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/beurrerbiscotte"
  }, {
    punchline: "Bienvenue au Caire...",
    name: "Gerhard Moeller",
    photo: "../assets/images/richard_sammel.jpg",
    sound: "../assets/sounds/bienvenueaucaire"
  }, {
    punchline: "J'ai réservé au nom de Bramard!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/Bramard"
  }, {
    punchline: "J'aime le bruit blanc de l'eau",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/bruitblanc"
  }, {
    punchline: "Ca me sert à rien...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/Camesertarien"
  }, {
    punchline: "C'est drôle...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/cestdrole"
  }, {
    punchline: "C'est toi arrêtez!!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/cesttoiarretez"
  }, {
    punchline: "C'est une astuce!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/cestuneastuce"
  }, {
    punchline: "Combien as-tu d'enfants Slimane?",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/combienenfants2"
  }, {
    punchline: "Comment est quoi?!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/commentestquoi"
  }, {
    punchline: "On ne devrait jamais faire confiance à une femme",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/confiancefemme"
  }, {
    punchline: "Je vous mettrai un petit coup de poliche",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/coupdepoliche"
  }, {
    punchline: "Mais il va la fermer sa gueule?!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/fermersagueule"
  }, {
    punchline: "Et non pas le gratin de pommes de terres...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/gratin"
  }, {
    punchline: "L'imam...",
    name: "Larmina El Akmar Betouche",
    photo: "../assets/images/berenice_bejo.jpg",
    sound: "../assets/sounds/imam"
  }, {
    punchline: "Inch'Allah!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/inchallah"
  }, {
    punchline: "Jack! Jack...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/jack"
  }, {
    punchline: "J'aime quand on m'enduit d'huile",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/jaimehuile"
  }, {
    punchline: "J'aime me battre",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/jaimemebattre"
  }, {
    punchline: "Jouer au malin",
    name: "Raymond Pelletier",
    photo: "../assets/images/francois_damiens.jpg",
    sound: "../assets/sounds/joueraumalin"
  }, {
    punchline: "Tu n'es pas seulement un lâche...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/lachetraitre"
  }, {
    punchline: "Moi qui pensais vous laisser faire l'amour avec moi",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/laisserfairelamour"
  }, {
    punchline: "Et si j'étais naine, et myope?",
    name: "Larmina El Akmar Betouch",
    photo: "../assets/images/berenice_bejo.jpg",
    sound: "../assets/sounds/nainemyope"
  }, {
    punchline: "On va boir un verre ou...",
    name: "Raymond Pelletier",
    photo: "../assets/images/francois_damiens.jpg",
    sound: "../assets/sounds/onvaboireunverre"
  }, {
    punchline: "On va dire que c'est moi!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/onvadirequecestmoi"
  }, {
    punchline: "C'est la piquette Jack!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/piquettejack"
  }, {
    punchline: "On dirait une poissonnière de Ménilmontant!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/poissonniere"
  }, {
    punchline: "Moi je suis dans le poulet!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/pouletbordel"
  }, {
    punchline: "Tu me prends pour un crétin?!",
    name: "Raymond Pelletier",
    photo: "../assets/images/francois_damiens.jpg",
    sound: "../assets/sounds/prendspouruncretin"
  }, {
    punchline: "Ta pudeur t'honore Slimane",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/pudeurhonore"
  }, {
    punchline: "S'agirait de grandir...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/sagiraitdegrandir"
  }, {
    punchline: "Mettre mon smocking en alpaga!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/smockingenalpaga"
  }, {
    punchline: "Le Soviet éponge!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/sovieteponge"
  }, {
    punchline: "T'es mauvais!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/tesmauvais"
  }, {
    punchline: "C'était donc ça tout ce tintouin!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/tintouin"
  }, {
    punchline: "Très français",
    name: "Larmina El Akmar Betouch",
    photo: "../assets/images/berenice_bejo.jpg",
    sound: "../assets/sounds/tresfrancaismerci"
  }, {
    punchline: "Triste Sir!",
    name: "Raymond Pelletier",
    photo: "../assets/images/francois_damiens.jpg",
    sound: "../assets/sounds/tristesir"
  }, {
    punchline: "Une Suze!",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/unesuze"
  }, {
    punchline: "Vous voulez mourir Bramard?!",
    name: "Raymond Pelletier",
    photo: "../assets/images/francois_damiens.jpg",
    sound: "../assets/sounds/voulezmourirbramar"
  }, {
    punchline: "Elle est bonne...",
    name: "Lucien Bramard / OSS117",
    photo: "../assets/images/jean_dujardin.jpg",
    sound: "../assets/sounds/elleestbonne"
  }
];

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password:String,
    company:String
});

var UserModel = mongoose.model('users', userSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("BONSOIR LE BACKEND");
  res.json({punchlines});
});



router.get('/signin', function(req, res, next) {
  UserModel.find(
    { email: req.query.email,  password: req.query.password} ,

    function (err, users) {
      if(users.length >0 ) {
        res.json({ result: true, firstName: users[0].firstName , lastName:users[0].lastName , email:users[0].email , company:users[0].company });
      } else {
        res.json({ result: false });
      }
    }
 )
});

router.post('/signup', function(req, res, next) {
  var newUser = new UserModel ({
   lastName: req.body.lastName,
   firstName: req.body.firstName,
   email: req.body.email,
   password:req.body.password
  });
  newUser.save(
      function (error, user) {
        res.json({ result: true });
      }
  );

});

module.exports = router;
