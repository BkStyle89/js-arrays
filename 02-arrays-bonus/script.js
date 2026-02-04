const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = 'Luca,lewis,carlo,phil,fabio,ed,nathan';
for(i=teachers.length -1; i>=0; i--){
  console.log(teachers[i]);
}


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
 const longNames = teachers.length;
for(i=0;i < teachers.length;i++ ){
  if (typeof teachers=='string'&& teachers.lenght ==5)
    console.log(teachers)
}

// 3. Rimuovi 'Ed' dall'array teachers
if (teachers.length >=7){
  teachers.splice(1,1)
  console.log(teachers)
}

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers;

for(i=0;i < teachers.length;i++ ){
  if ([1] == 0){ console.log('Fabio non è presente');}
  else ([1] == 1); {console.log('fabio è presente')}
  
}



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
  console.log(teachersString)

