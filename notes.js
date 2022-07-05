const fs = require('fs')
const { version } = require('yargs')

// version1

// const addNote = (title,body) =>{
//     // [{title:"new",body:"body1"}]
//     const notes = loadNotes()  // array of object // []
//     console.log(notes)
//     notes.push({
//         // shorthand Property
//         title,
//         body
//     })
//     // [{title:"new",body:"body1"}],{title:"title1",body:"body2"}]]
//     console.log(notes) // array of object
//     saveNotes(notes)
    
// }
//////////////////////////////////////////////////////////////////////////////////
// version2 (Filter)

const addNote = (title,body) =>{
    const notes = loadNotes()

    const duplicateTitle = notes.filter((obj)=>{
         return obj.title === title
    })

   console.log(duplicateTitle)
   
   if( duplicateTitle.length === 0){
    notes.push({
        title,body
    })
    saveNotes(notes)
    console.log('Saved Successfully')
   } else{
    console.log('Error Duplicated')
   }

}


/////////////////////////////////////////////////
// version2 (Find)

// const addNote = (title,body) =>{
//     const notes = loadNotes()

//     const duplicateTitle = notes.find((obj)=>{
//         return obj.title == title
//     })

//    console.log(duplicateTitle)
   
//    if( !duplicateTitle){
//     notes.push({
//         title,body
//     })
//     saveNotes(notes)
//     console.log('Saved Successfully')
//    } else{
//     console.log('Error Duplicated')
//    }

// }

//////////////////////////////////////////////////////////////////////////////////
// Delete


//     const deleteNote = (title) =>{
//     const notes = loadNotes()

//     const notesToKeep = notes.filter((obj)=>{
//         return obj.title !== title
//     })

//      console.log(notesToKeep)
//      saveNotes(notesToKeep)
//      console.log('Delete Successfully')

// }


    const deleteNote = (title) =>{
    const notes = loadNotes()

    const notesToKeep = notes.filter((obj)=>{
        return obj.title !== title
    })

   console.log(notesToKeep)
   
   
    if( notesToKeep.length !== notes.length){
     saveNotes(notesToKeep)
     console.log('Delete Successfully')
    } else{
    console.log('no Title is found')
    }

}
//////////////////////////////////////////////////////////////////////////////////
// read  (Filter)

//     const readNote = (title) =>{
//     const notes = loadNotes()

//     const notesToRead = notes.filter((obj)=>{
//         return obj.body == title
//     })

//    console.log(notesToRead)
//    
//    console.log('Read Successfully')

    
   

// }

// read  (find)
    const readNote = (title) =>{
    const notes = loadNotes()

    const note = notes.find((obj)=>{
        return obj.body == title
    })

   console.log(note)
   if(note){
    console.log(note.body)
   }else{
    console.log('not Found')
   }

}
//////////////////////////////////////////////////////////////////////////////////
// List

    const listNote = () =>{
    const notes = loadNotes()

    notes.forEach((obj)=>{
        console.log(obj.title)
    })



    
   

}






const loadNotes = () =>{
    try{
    const data = fs.readFileSync('notes.json').toString()
    return JSON.parse(data) // josn --> object
    }
    catch(e){
        return []
    }

}
const saveNotes = (notes) =>{
    // notes --> [ { title: 'new', body: 'body1' } ]
    //  [{title:"new",body:"body1"}],{title:"title1",body:"body2"}]] -->
    //  [{"title":"new","body":"body1"}],{"title":"title1","body":"body2"}]]
    const saveData = JSON.stringify(notes)
    // [ { title: 'new', body: 'body1' } ] --> [ { "title": 'new', "body": 'body1' } ]
  
    console.log(saveData)
    fs.writeFileSync('notes.json',saveData) 
}
module.exports = {
   addNote, // addNote:addNote
   deleteNote,
   readNote,
   listNote
}