## Att göra listan
En övning i att skapa funktioner som manipulerar en att göra lista.
Ladda hem zip-filen som innehåller en "bas" i form av en html-fil som laddar en tom js-fil med namnet **todo-list** i vilken du kan börja arbeta.

Var noga med att namnge variabler exakt som vi säger nedan om du vill kunna se en automatisk visualisering av vad du gör.

Skriv funktioner som kan manipulera listan på olika sätt och testa dem genom att anropa dem via din webbläsares utvecklingskonsol.

### 1. Skapa en att göra lista
Skapa en att göra lista genom att deklarera en variabel med namnet **todoList** som en array.


### 2. Lägg till en sak att göra till listan
Skapa en funktion **addToList** som lägger till en sak att göra (en sträng) till listan och returnerar hela listan.


### 3. Lägg till en sak att göra överst i listan
Ibland får man saker att göra som är viktigare än alla andra. Skapa en funktion **addToTopOfList** som lägger till en sak att göra längst upp i listan, samt returnerar hela listan.


### 4. Ta bort en sak längst ner i listan
Kanske var det där längst ner i att göra listan inte så viktigt? Skriv en funktion **removeFromBottomOfList** som tar bort den sak som är längst ner i listan och returnerar den.


### 5. Ta bort en sak högst upp i listan
Du fick äntligen det som var viktigast gjort? Skriv en funktion **removeFromTopOfList** som tar bort den sak som är högst i listan och returnerar den.


### 6. Ta bort en sak baserad på dess placering i listan
Det är inte alltid man får saker gjorda i ordning. Skriv en funktion **removeFromListByIndex** till vilken man skickar ett nummer och saken på denna plats i listan tas bort. Returnera den bortplockade saken.

**Notera:** För enkelhetens skull räknar vi det översta elementet som nummer 0, nästa som nummer 1 etc. Precis som en dator. Försök inte "förmänskliga funktionen" till att börja på nummer 1. Då blir den svårare att återanvända i din programmering.

**Notera 2:** Tillåt INTE att man försöker ta bort saker på negativa platser, dvs. skickar ett nummer mindre än 0.


### 7. Ta bort en sak baserad på dess namn
Skriv en funktion **removeFromListByName** som hittar en sak i listan baserat på dess namn och tart bort den. Returnera den borttagna saken.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByIndex* (från steg 6) inuti din funktion.


### 8. Ta bort en sak och lägg till den i "har gjort"-lista
Skapa en att "har gjort"-lista genom att deklarera en variabel med namnet **doneList** som en array.
Skriv en funktion **removeFromListAndAddToDone** som flyttar en sak from att göra-listan till "har gjort"-listan. Returnera listan över saker som är gjorda.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) inuti din funktion.


### 9. Flytta en sak till toppen av listan
Ibland blir en sak plötsligt riktigt viktiga att göra. Skriv en funktion **moveToTop** som hittar en sak i listan baserat på dess namn och flyttar den till toppen. Returnera hela att göra-listan.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) och *addToTopOfList* (från steg 3) inuti din funktion.


### 10. Flytta en sak till botten av listan
Ibland blir en sak plötsligt ganska opriorieterad. Skriv en funktion **moveToBottom** som hittar en sak i listan baserat på dess namn och flyttar den till botten. Returnera hela att göra-listan.

**Notera:** Försök att skriva mindre kod genom att återanvända/anropa *removeFromListByName* (från steg 7) och *addToList* (från steg 2) inuti din funktion.


### 11. Flytta en sak ett steg ner i listan
Ibland behöver man prioritera ner något lite grann. Skriv en funktion **moveDown** som flyttar en sak ett steg ner i listan.

**Tips:** Man kan även se detta som att saken byter plats med det som var nedanför den.


### 12. Flytta en sak ett steg upp i listan
Ibland behöver man prioritera upp något lite grann. Skriv en funktion **moveUp** som flyttar en sak ett steg upp i listan.

**Tips:** Man kan även se detta som att saken byter plats med det som var ovanför den.


