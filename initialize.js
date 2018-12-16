        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        var itemsRef = db.collection("items");

        // itemsRef.doc("810").set({
        //     name: "810", 
        //     quantity: 20, 
        //     category: "WHITE"           
        // });
        // itemsRef.doc("801").set({
        //     name: "801", 
        //     quantity: 20, 
        //     category: "PINK"           
        // });
        // itemsRef.doc("A.Lamberton").set({
        //     fName: "Adler", 
        //     lName: "Lamberton", 
        //     email: "alamberton1@ft.com",
        //     age: 50, 
        //     gender: 'Male',
        //     yearsOfExperience: 7,
        //     isFullTime: true,
        // });

        // itemsRef.doc("J.Summerson").set({
        //     fName: "Jeremy", 
        //     lName: "Summerson", 
        //     email: "jsummerson2@aboutads.info",
        //     age: 58, 
        //     gender: 'Male',
        //     yearsOfExperience: 6,
        //     isFullTime: true,
        // });

        // itemsRef.doc("G.O'Byrne").set({
        //     fName: "Gunilla", 
        //     lName: "O'Byrne", 
        //     email: "gobyrne3@bbc.co.uk",
        //     age: 56, 
        //     gender: 'Female',
        //     yearsOfExperience: 14,
        //     isFullTime: true,
        // });

        // itemsRef.doc("W.Ells").set({
        //     fName: "Weston", 
        //     lName: "Ells", 
        //     email: "wells4@linkedin.com",
        //     age: 60, 
        //     gender: 'Male',
        //     yearsOfExperience: 8,
        //     isFullTime: false,
        // });

        // itemsRef.doc("F.Penhall").set({
        //     fName: "Freddy", 
        //     lName: "Penhall", 
        //     email: "fpenhall5@blogspot.com",
        //     age: 50, 
        //     gender: 'Female',
        //     yearsOfExperience: 8,
        //     isFullTime: true,
        // });

        // itemsRef.doc("M.Pothergill").set({
        //     fName: "Marion", 
        //     lName: "Pothergill", 
        //     email: "mpothergill6@theglobeandmail.com",
        //     age: 39, 
        //     gender: 'Male',
        //     yearsOfExperience: 14,
        //     isFullTime: false,
        // });
        
        // itemsRef.doc("P.Leechman").set({
        //     fName: "Prinz", 
        //     lName: "Leechman", 
        //     email: "pleechman7@ehow.com",
        //     age: 58, 
        //     gender: 'Male',
        //     yearsOfExperience: 14,
        //     isFullTime: true,
        // });

        // itemsRef.doc("B.Newby").set({
        //     fName: "Babita", 
        //     lName: "Newby", 
        //     email: "bnewby9@techcrunch.com",
        //     age: 41, 
        //     gender: 'Female',
        //     yearsOfExperience: 10,
        //     isFullTime: false,
        // });

        // itemsRef.doc("C.Blest").set({
        //     fName: "Celestia", 
        //     lName: "Blest", 
        //     email: "cblesta@delicious.com",
        //     age: 19, 
        //     gender: 'Female',
        //     yearsOfExperience: 1,
        //     isFullTime: false,
        // });
        
        // itemsRef.doc("N.Tather").set({
        //     fName: "Nannette", 
        //     lName: "Tather", 
        //     email: "ntatherb@delicious.com",
        //     age: 40, 
        //     gender: 'Female',
        //     yearsOfExperience: 13,
        //     isFullTime: true,
        // });

        itemsRef.get().then(function(querySnapshot) {
            var tableRow='';
            querySnapshot.forEach(function(doc) {
                var document = doc.data();
                tableRow +='<tr>';
                tableRow += '<td class="fname">' + document.fName + '</td>';
                tableRow += '<td class="lname">' + document.lName + '</td>';
                tableRow += '<td class="email">' + document.email + '</td>';
                tableRow += '<td class="age">' + document.age + '</td>';
                tableRow += '<td class="gender">' + document.gender + '</td>';
                tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + '</td>';
                tableRow += '<td class="isfulltime">' + document.isFullTime + '</td>';
                tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
                tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
                tableRow += '</tr>';
            });
            $('tbody.tbodyData').append(tableRow);
        });