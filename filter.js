
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    var itemsRef = db.collection("items");
    
    $(document).ready(function() {

            $('#onlyMalesFilter').click(function(){
                console.log('onlyMalesFilter Filter executed');
                itemsRef.where("gender", "==", "Male")
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#fullTimeFilter').click(function(){
                itemsRef.where("isFullTime", "==", true)
                    .onSnapshot(function(querySnapshot) {
                        LoadTableData(querySnapshot);
                });
            });

            $('#olderThenFilter').click(function(){
                //older than 30
                itemsRef.where("age", ">=", 30)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#ageBetweenFilter').click(function(){
                //older than 35, but younger than 50
                itemsRef.where("age", ">=", 35).where("age", "<=", 50)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#yearsOfExperienceFilter').click(function(){
                //female and 5-10 years of experience
                itemsRef.where("gender", "==", "Female")
                itemsRef.where("yearsOfExperience", ">=", 5).where("yearsOfExperience", "<=", 10)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#clearFilter').click(function(){
                itemsRef.get().then(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });
            
            function LoadTableData(querySnapshot){
                var tableRow='';
                querySnapshot.forEach(function(doc) {
                    var document = doc.data();
                    console.log(document);
                    tableRow +='<tr>';
                    tableRow += '<td class="name">' + document.name + '</td>';
                    tableRow += '<td class="quantity">' + document.quantity + '</td>';
                    tableRow += '<td class="category">' + document.category + '</td>';
                    tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
                    tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
                    tableRow += '</tr>';
                });
                $('tbody.tbodyData').html(tableRow);
            }
});