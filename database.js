const config  = require("./config.json");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(process.env.DB, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Sucesso ao conectar-se no banco de dados!");
});

var User = new Schema({
    _id: {
        type: String
    },
     level: {
        type: Number,
        default: 0
    },
    guildlevel: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
     guildxp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    rubys: {
        type: Number,
        default: 0
    },
    emerald: {
        type: Number,
        default: 0
    },
    containers: {
        type: Number,
        default: 0
    },
    goldbox: {
        type: Number,
        default: 0
    },
     lootboxr: {
        type: Number,
        default: 0,
    },
    lootbox: {
        type: Number,
        default: 0,
    },
    cupcake: {
        type: Number,
        default: 0,
    },
    alma: {
        type: Boolean,
        default: false,
    },
    espaco: {
        type: Boolean,
        default: false,
    },
    mente: {
        type: Boolean,
        default: false,
    },
    poder: {
        type: Boolean,
        default: false,
    },
    realidade: {
        type: Boolean,
        default: false,
    },
    tempo: {
        type: Boolean,
        default: false,
    },
    dayCol: {
        type: Number,
        default: 0,
    },
    premium: {
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
        default: "No hay una descripción"
    },
    rep: {
        type: Number,
        default: 0
    },
      emblema: {
        type: String,
        default: "./Emblema/level0.png" // "https://i.imgur.com/6TUbmWk.png"
    },
    profile_background: {
        type: String,
        default: "https://cdn.discordapp.com/attachments/413155538755649538/433355322208419840/New_Logo_Sysop.png"
        
    },
    badgep1: {
        type: String,
        default: "Invisiblebadge"
        
    },
    badgep2: {
        type: String,
        default: "Invisiblebadge"
        
    },
    badgep3: {
        type: String,
        default: "Invisiblebadge"
        
    },
    borderp: {
        type: String,
        default: "bwhite"
        
    },
    background_shoped: {
        type: String,
        default: "no"
    },
    bio_shoped: {
        type: String,
        default: "no"
    },
    rolecor_shoped: {
        type: String,
        default: "no"
    },
     gumberr_shoped: {
        type: String,
        default: "no"
    },
    goldbox_shoped: {
        type: String,
        default: "no"
    },
    border_shoped: {
        type: String,
        default: "no"
    },
    cla_nome_shoped: {
        type: String,
        default: "no"
    },
     recrutador_top5: {
        type: String,
        default: "no"
    },
    fbranca: {
        type : Number,
        default: 0
    },
    flaranja: {
        type : Number,
        default: 0
    },
    fvermelha: {
        type : Number,
        default: 0
    },
    fpreta: {
        type : Number,
        default: 0
    },
    pmarvel: {
        type : Number,
        default: 0,
    },
    emb1: {
        type : String,
        default: 'Nenhum emblema ainda.',
    },
    emb2: {
        type : String,
        default: '',
    },
    emb3: {
        type : String,
        default: '',
    },
    verificado: {
        type : String,
        default: '',
    },
    rpup: {
      type: Number,
      default: 0,
    },
    rpbio: {
      type: String,
      default: '',
    },
    reminder: {
      type: Number,
      default: 60000,
    },
    adv: {
      type: Number,
      default: 0,
    }
    });

var Bloqueio = new Schema({
    _id: {
        type: String
    },
   block: {
        type: String,
        default: 0
        
    },
})

var Guilds = new Schema({
    _id: {
        type: String
    },
    setprefix: {
        type: String,
        default: 'sy!'
    },
    invites: {
        type: String,
        default: ''
    },
    contador: {
      type: String,
      default: '',
    },
    texto: {
      type: String,
      default: '',
    },
    autorole: {
      type: String,
      default: '',
    },
    autoroleid: {
      type: String,
      default: '',
    },
    welcome: {
      type: String,
      default: '',
    },
     welcomeauthor: {
      type: String,
      default: '',
    },
    welcomeChannel: {
      type: String,
      default: '',
    },
     rremove: {
      type: String,
      default: '',
    },
    rremoveChannel: {
      type: String,
      default: '',
    },
    words: {
      type: Array,
      default: [],
    },
    filterInvites: {
      type: Boolean,
      default:  false,
    },
    convites: {
      type: Boolean,
      default:  false,
    },
    filterPrintscreen: {
      type: Boolean,
      default: false,
    },
    sugest: {
      type: String,
      default: '',
    },
    role1: {
      type: String,
      default: '',
    },
    role2: {
      type: String,
      default: '',
    },
    role3: {
      type: String,
      default: '',
    },
    role4: {
      type: String,
      default: '',
    },
    role5: {
      type: String,
      default: '',
    },
    role6: {
      type: String,
      default: '',
    },
    role7: {
      type: String,
      default: '',
    },
    role8: {
      type: String,
      default: '',
    },
    role9: {
      type: String,
      default: '',
    },
    role10: {
      type: String,
      default: '',
    },
    role11: {
      type: String,
      default: '',
    },
    role12: {
      type: String,
      default: '',
    },
    menino: {
      type: String,
      default: '',
    },
    menina: {
      type: String,
      default: '',
    },
    principiante: {
      type: String,
      default: '',
    },
    staff: {
      type: String,
      default: '',
    },
    logging: {
      type: String,
      default: '',
    },
    emj1: {
      type: String,
      default: '',
    },
    emj2: {
      type: String,
      default: '',
    },
    emj3: {
      type: String,
      default: '',
    },
    emj4: {
      type: String,
      default: '',
    },
    emj5: {
      type: String,
      default: '',
    },
    emj6: {
      type: String,
      default: '',
    },
    emj7: {
      type: String,
      default: '',
    },
    emj8: {
      type: String,
      default: '',
    },
    emj9: {
      type: String,
      default: '',
    },
    emj10: {
      type: String,
      default: '',
    },
    emj11: {
      type: String,
      default: '',
    },
    emj12: {
      type: String,
      default: '',
    },
    textoreact: {
      type: String,
      default: '',
    },
    rol1: {
      type: String,
      default: '',
    },
    rol2: {
      type: String,
      default: '',
    },
    rol3: {
      type: String,
      default: '',
    },
    rol4: {
      type: String,
      default: '',
    },
    rol5: {
      type: String,
      default: '',
    },
    staffanuncio: {
      type: String,
      default: '',
    },
    banlog: {
      type: String,
      default: '',
    },
    logger: {
      type: String,
      default: '',
    },
    bye: {
      type: String,
      default: '',
    },
    byeChannel: {
      type: String,
      default: '',
    },
    dm: {
      type: String,
      default: '',
    },
    slow: {
      type: Number,
      default: 0,
    }
});



var Ship = new Schema({
    nome1: {
        type: String
    },
    nome2: {
        type: String
    },
    porcentagem: {
        type: String
    },
});


var Striker = new Schema({
    _id: {
        type: String
    },
    Striker1: {
        type: String,
        default: "",
    },
    Striker2: {
        type: String,
        default: "",
    },
    Striker3: {
        type: String,
        default: "",
    }
})



var Guilds = mongoose.model("Guilds", Guilds);
var Users = mongoose.model("Users", User);
var Ships = mongoose.model("Ships", Ship);
var Strikers = mongoose.model("Strikers", Striker);;
var Bloqueio = mongoose.model("Bloqueio", Bloqueio);

exports.Bloqueio = Bloqueio;
exports.Users = Users;
exports.Ships = Ship;
exports.Guilds = Guilds;
exports.Striker = Strikers;
