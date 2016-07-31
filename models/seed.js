//load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via mongoose
seeder.connect(process.env.MONGODB_URI, function () {
    // Load Mongoose models
    seeder.loadModels([
      'models/profile.js',
      'models/project.js',
      'models/education.js',
      'models/work.js'
    ])

    // Clear specified collections
    seeder.clearModels(['Profile', 'Project', 'Education', 'Work'], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(me)
    })
})

// Data array containing seed data -documents organised by Model
var me = [
  {
    'model': 'Profile',
    'documents': [
      {
        'first_name': 'Andrian',
        'last_name': 'Kanta',
        'email': 'a.kanta22@gmail.com',
        'description': 'Full-stack Developer',
        'socials': [{name: 'https://github.com/Akanta21'},
                    {name: 'https://sg.linkedin.com/in/andriankanta'}],
        'picture': '../public/images/DSC_4225.jpg'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'Twittee',
        'description': 'A educational blog to link up students and tutors',
        'link': 'https://twitty3.herokuapp.com/',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'},
                    {name: 'Ruby'},
                    {name: 'Bootstrap'},
                    {name: 'Rails'}]
      },
      {
        'title': 'HDB + SPOTIFY dashboard',
        'description': 'An application which allows the user to search, play music while going through HDB resale data',
        'link': 'https://akanta21.github.io/Miniproject3a',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'},
                    {name: 'Javascript'},
                    {name: 'JQuer'},
                    {name: 'Bootstrap'},
                    {name: 'Node JS'}]
      },
      {
        'title': 'JS Memory Game',
        'description': 'Memory Game created with Javascript + JQuery',
        'link': 'https://akanta21.github.io/game',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'},
                    {name: 'Javascript'},
                    {name: 'JQuery'}]
      },
      {
        'title': 'Tic-Tac-Toe',
        'description': 'Tic-Tac-Toe that allows two users to go agains each other',
        'link': 'https://akanta21.github.io/tic-tac-toe',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'},
                    {name: 'Javascript'}]
      },
      {
        'title': 'Biography',
        'description': 'Biography page of Kobe Bryant',
        'link': 'https://akanta21.github.io/Biography',
        'skills': [{name: 'HTML'},
                    {name: 'CSS'}]
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'Nanyang Technological University',
        'subjects': [{name: 'Materials Science Engineering'}]
      },
      {
        'school': 'Jurong Junior College',
        'subjects': [{name: 'Math'},
                     {name: 'Chemistry'},
                     {name: 'Physics'},
                     {name: 'Economics'}]
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
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
]
