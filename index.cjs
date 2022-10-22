const argv = require("yargs").argv

// const chalk = require('chalk')


const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
  } = require("./contacts");
  
  
  const invokeAction = async ({ action, id, name, email, phone }) => {
    
      switch (action) {
        case "list":
          const list = await listContacts();
          console.table(contacts);
          break;
  
        case "get":
            const contactById = await getContactById(id)
            if (contactById) {
              console.table(contactById)
              return
            }
            console.log('Contact not found')
            break;
  
        case "add":
            if (!name || !email || !phone) {
                console.log('Entered data is not correct')
                return
              }
              const newContact = await addContact(name, email, phone)
              console.log('New contact has been added')
              console.table(newContact)
              break;
  
        case "remove":
            const newContactsSet = await removeContact(id)
            if (!newContactsSet) {
              return
            }
              console.log('Contact has been deleted')
            break;
  
        default:
          console.warn("\x1B[31m Unknown action type!");
        }
    }
    
    invokeAction(argv);