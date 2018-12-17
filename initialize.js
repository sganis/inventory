// Initialize Cloud Firestore through Firebase
console.log('initializing...');
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const itemsRef = db.collection("items");


var categories = ['WHITE', 'PINK', 'BLACK','RED'];  

// for(var i = 0; i<10; i++) {
//     var cat = categories[Math.floor(Math.random() * categories.length)];
//     var qty = Math.floor(Math.random() * 24) + 18;
//     var name = (800+i).toString();
//     console.log(cat, qty, name);
//     itemsRef.doc(name).set({
//         name: name, 
//         quantity: qty, 
//         category: cat           
//     });
// }
