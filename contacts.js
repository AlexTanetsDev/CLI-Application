const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contactsData = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(contactsData);
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  const contactsList = await listContacts();

  const contact = contactsList.find(
    (contact) => contact.id === contactId.toString()
  );
  return contact;
}

async function removeContact(contactId) {
  const contactList = await listContacts();
  const idx = contactList.findIndex(
    (contact) => contact.id === contactId.toString()
  );
  contactList.splice(idx, 1);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contactList), "utf8");
    console.log("contact was deleted!");
    listContacts().then(console.table);
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  const contactList = await listContacts();
  contactList.push({
    id: (contactList.length + 1).toString(),
    name,
    email,
    phone,
  });
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contactList), "utf8");
    console.log("contact was added!!");
    listContacts().then(console.table);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
