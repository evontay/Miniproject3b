var express = require('express')
var router = express.Router()

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
var me = {
  'about': {
    'name': 'Andrian Kanta',
    'description': 'Full-stack Developer'
  },

  'social': [
    {'github': 'https://github.com/Akanta21',
    'linkedin': 'https://sg.linkedin.com/in/andriankanta'
    }
  ],

  'projects': [
    {
      'title': 'Twittee',
      'description': 'A educational blog to link up students and tutors',
      'link': 'https://twitty3.herokuapp.com/',
      'skills': ['HTML', 'CSS', 'Ruby', 'Bootstrap', 'Rails']
    },
    {
      'title': 'HDB + SPOTIFY dashboard',
      'description': 'An application which allows the user to search, play music while going through HDB resale data',
      'link': 'https://akanta21.github.io/Miniproject3a',
      'skills': ['HTML', 'CSS', 'Javascript', 'Node Js', 'JQuery']
    },
    {
      'title': 'JS Memory Game',
      'description': 'Memory Game created with Javascript + JQuery',
      'link': 'https://akanta21.github.io/game',
      'skills': ['HTML', 'CSS', 'Javascript', 'Node Js', 'JQuery']
    },
    {
      'title': 'Tic-Tac-Toe',
      'description': 'Tic-Tac-Toe that allows two users to go agains each other',
      'link': 'https://akanta21.github.io/tic-tac-toe',
      'skills': ['HTML', 'CSS', 'Javascript']
    },
    {
      'title': 'Biography',
      'description': 'Biography page of Kobe Bryant',
      'link': 'https://akanta21.github.io/Biography',
      'skills': ['HTML', 'CSS']
    }
  ],

  'skills': [{
    'HTML': 9,
    'CSS': 8,
    'Javascript': 8,
    'Ruby': 7,
    'Node': 7.5,
    'Express': 7.5
  }],
  'education': [
    {
      'school': 'Nanyang Technological University',
      'subjects': ['Materials Science Engineering']
    },
    {
      'school': 'Jurong Junior College',
      'subjects': ['Math', 'Chemistry', 'Physics', 'Economics']
    }
  ],
  'work': [
    {
      'company': 'Temasek Laboratories',
      'role': 'Project Officer',
      'duty': 'Ensuring research projects delivery are met. Carrying out procurement duty and liason with project partners.'
    },
    {
      'company': 'Micron Semiconductor',
      'role': 'Process Coordinator and Production Supervisory',
      'duty': 'Implementing and updating SOPs, making sure that all angles are covered to prevent recalls.'
    }
  ]
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json(me.about)
})

/* GET social media links page. */
router.get('/social', function (req, res, next) {
  res.status(200).json(me.social)
})

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.status(200).json(me.projects)
})

/* GET projects/:id page. */
router.get('/projects/:id', function (req, res, next) {
  res.status(200).json(me.projects[parseInt(req.params.id)])
})

/* GET skills page. */
router.get('/skills', function (req, res, next) {
  res.status(200).json(me.skills)
})

/* GET education page. */
router.get('/education', function (req, res, next) {
  res.status(200).json(me.education)
})

/* GET education/:id page. */
router.get('/education/:id', function (req, res, next) {
  res.status(200).json(me.education[parseInt(req.params.id)])
})

/* GET work page. */
router.get('/work', function (req, res, next) {
  res.status(200).json(me.work)
})

module.exports = router
