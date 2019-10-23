'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

let usuarios = [
    { name : 'aldair',
      country : 'Perú'
    },
    {
        name : 'Jose',
        country: 'Colombia',
    }
]
// let all;
Route.on('/').render('welcome')

Route.get('/user', async({response,request}) => 

    response.send(usuarios)

);

// Router.post('/user', async({request})=> 
    
// )
