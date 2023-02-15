# CLI-Application

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/Wmv0FxXlrynotna8Op7BwcI3IBZgzZ

# Отримуємо контакт по id
node index.js --action="get" --id=5
https://monosnap.com/file/yAsDqno6SQtY4kcfaeih15Sw2Fz7oo

# Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/wV2FdsO40bdQcQyrY8LGvyTOuIl82L

# Видаляємо контакт
node index.js --action="remove" --id=3
https://monosnap.com/file/bzUObpTFVo7Pdr0qQSQAEVLKaD0sB0
