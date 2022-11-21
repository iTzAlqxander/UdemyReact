import person from './person.js'
import prs from './person.js'
//the export js has a default export therefore you can name "person" whatever you want


import { baseData } from './utility.js'
import { clean } from './utility.js'
//there are two different const. in utility.js therefore you need curly braces to explicity target specific things from the file

//Extra:

//Default export ; You can choose the name
import person from './person.js'
import prs from './person.js'

//Named export ; Have to use exact name defined
import{smth} from './utility.js'
//Exact name
import{smth as Smth} from './utility.js'
//Assign alias
import * as bundled from './utility.js'
//Import everything
//To access would become bundled.clean && bundled.baseData