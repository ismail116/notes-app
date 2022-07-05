// server side
// Module --> allow you to add fucntionality to our app
/**
 * 3
 * 1) Core Module
 * 2) Our own modules
 * 3) NPM
 */
// Core module 
// fs --> file system
// require

// terminal --> new terminal ---> node app.js
const fs = require('fs')
fs.writeFileSync('notes.txt','Hello ')

// buffer --> string toString()
console.log(fs.readFileSync('notes.txt').toString())

// appendFileSync
fs.appendFileSync('notes.txt',' omar')

/////////////////////////////////////////////////////////////////////////////

// 2) our own modules
// require
const x = require('./data')
console.log(x)
console.log(x.nameUser)
console.log(x.name1)
console.log(x.sum1(5,5))

////////////////////////////////////////////////////////////////////////

// 3) NPM node pacakge manger
/**
 * npm init -y --> intalize  one time in the start of your project
 * npm i validator
 * 
 * npm i --> node_modules is deleted
 */

 var validator = require('validator');
 console.log(validator.isEmail('omar@gmail.com')); //true
 console.log(validator.isEmail('omar')); //=> false 
 
 ////////////////////////////////////////////////////////////////////////

 // get input using command line argumremnt (termeinal)
// array 2 input reserved
//  console.log(process.argv)
//  // if --> add console.log('add item')
//  // else if --> remove console.log('remove item')
//  // else --> console.log('error')

//  const command = process.argv[2]
//  console.log(command)

//  if(command === 'add'){
//     console.log('Add item')
//  }
//  else if (command === 'delete'){
//     console.log('Delete item')
//  }
//  else {
//     console.log('Error')
//  }

 // node app.js --title="title1"
 // process.argv --> parse arguments (object)

 // yargs
 // npm i yargs

//  const yargs = require('yargs')
//  console.log(yargs.argv)
// console.log(yargs.argv.title)
// console.log(yargs.argv.body)

////////////////////////////////////////////////////////////////////////////

// version1
// 4 commands add/ delete/read/list

const yargs = require('yargs')
// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     // code excuted when using add command
//     handler:()=>{
//         console.log('Add notessss')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete notes command',
//     handler:()=>{
//         console.log('Delete notes')
//     }
// })
// // read
// yargs.command({
//     command:'read',
//     describe:'Read notes command',
//     handler:()=>{
//         console.log('Read notes')
//     }
// })

// //list
// yargs.command({
//     command:'list',
//     describe:'List notes command',
//     handler:()=>{
//         console.log('List notes')
//     }
// })

/////////////////////////////////////////////////////////////////////

// version 2
// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     //  options command deal with
//     builder:{   
//         title:{
//             describe:'This is title description in add command',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'This is body description in add command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     // code excuted when using add command
//     handler:()=>{
//         console.log('Messsssageeeeeee')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete notes command',
//     builder:{
//         title:{
//             describe:'This is body description in delete command',
//             demandOption:true,
//             type:'string'
//         }
//     },

//     handler:()=>{
//         console.log('Delete notes')
//     }
// })
// // read
// yargs.command({
//     command:'read',
//     describe:'Read notes command',
//     builder:{
//         title:{
//             describe:'This is body description in read command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Read notes')
//     }
// })

// //list
// yargs.command({
//     command:'list',
//     describe:'List notes command',
//     handler:()=>{
//         console.log('List notes')
//     }
// })
///////////////////////////////////////////////////////////////////////
// json/object
// trials.js
////////////////////////////////////////////////////////////////////////
// console.log(yargs.argv)

// version 3
// node app.js add --title="content" --body="content"
const notes = require('./notes')

yargs.command({
    command:'add',
    describe:'Add notes',
    //  options command deal with
    builder:{   
        title:{
            describe:'This is title description in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body description in add command',
            demandOption:true,
            type:'string'
        }
    },
    // code excuted when using add command
    handler:()=>{
      notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete notes command',
    builder:{
        title:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'string'
        }
    },

    handler:()=>{
        notes.deleteNote(yargs.argv.title)
    }
})
// read
yargs.command({
    command:'read',
    describe:'Read notes command',
    builder:{
        title:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        notes.readNote(yargs.argv.title)
    }
})

//list
yargs.command({
    command:'list',
    describe:'List notes command',
    handler:()=>{
         notes.listNote()
    }
})
console.log(yargs.argv)
// yargs.parse()


console.log("test")
