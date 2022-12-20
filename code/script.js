// Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
// Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, 
// "Заголовок, тело, футер, дата". Создать методы для заполнения и отображения документа.


const myDoc = {
  title: "",
  body: "",
  footer: "",
  date: "",

  application: {
    title: { content: "" },
    body: { content: "" },
    footer: { content: "" },
    date: { content: "" },
  },

  print: function () {
    for (const item in myDoc) {
      if (typeof myDoc[item] == "string") {
        myDoc[item] = prompt(`Введите ${[item]}`);
        document.write(`${item}: ${myDoc[item]} <br/> `);
      } else if (typeof myDoc[item] == "object") {
        for (const item in myDoc.application) {
          myDoc.application[item] = prompt(`Введите ${[item]} приложения`);
          document.write(
            `${item} приложения: ${myDoc.application[item]} <br/> `
          );
        }
      }
    }
  }
}
myDoc.print();
