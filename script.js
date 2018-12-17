// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var itemsRef = db.collection("items");


$(document ).ready(function() {
    $('.itemForm').hide();
    //get all the data on app startup
    $('#createEmployee').click(function(){
        $('.itemForm').show();
        $('#dynamicBtn').text('Save')
    });

    $('#dynamicBtn').click(function(){
        //employee form values
        var name = $("#name").val();
        var quantity = $("#quantity").val();
        var category = $("#category").val();

        //check if you need to create or update an employee
        if($(this).text() == "Save"){
            // Add an employee with document name as (first letter of firstname).(lastname)
            // Example: Ervis Trupja -> E.Trupja
            var docuName = name;
            db.collection("items").doc(docuName).set({
                name: name,
                quantity: quantity,
                category: category                
            })
            .then(function(docRef) {
                 $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Item was created!</div>').delay(2500).fadeOut('slow');
                 $('.itemForm').hide();
                 LoadData();
            })
            .catch(function(error) {
                $('#operationStatus').html('<div class="alert alert-danger"><strong>Error!</strong> Item was not created!</div>').delay(2500).fadeOut('slow');
            });
        }
        else{
            // Create a reference to the document by following the same pattern of the document name.
            // Example: Ervis Trupja -> E.Trupja
            var docuName = name;
            var sfDocRef = db.collection("items").doc(docuName);
            sfDocRef.set({ 
                name: name,
                quantity: quantity,
                category: category
            })
            .then(function() {
                $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Employee was updated.</div>').delay(2500).fadeOut('slow');
                $('.itemForm').hide();
                LoadData();
            })
            .catch(function(error) {
                $('#operationStatus').html('<div class="alert alert-danger"><strong>Failure!</strong> Employee could not be updated.</div>').delay(2500).fadeOut('slow');
            });
        }
    });

    // Cancel the Employee form
    $('#cancel').click(function(){
        $('.itemForm').hide();
    });

    // Get the data of the employee you want to edit
    $("tbody.tbodyData").on("click","td.editEmployee", function(){
        $('.itemForm').show();
        $('#dynamicBtn').text('Update');

        $("#name").val($(this).closest('tr').find('.name').text());
        $("#quantity").val($(this).closest('tr').find('.quantity').text());
        $("#category").val($(this).closest('tr').find('.category').text());        
    });

    // Delete employee
    $("tbody.tbodyData").on("click","td.deleteEmployee", function(){

        //Get the Employee Data
        var name = $(this).closest('tr').find('.name').text(); //First Name
        
        // Create a reference to the document by following the same pattern of the document name.
        // Example: Ervis Trupja -> E.Trupja
        db.collection("items").doc(name).delete().then(function() {
            $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Item was deleted.</div>').delay(2500).fadeOut('slow');
            LoadData();
        }).catch(function(error) {
            $('#operationStatus').html('<div class="alert alert-danger"><strong>Failure!</strong> Item was not deleted.</div>').delay(2500).fadeOut('slow');
        });
    });

    $("#searchEmployee" ).change(function() {
        console.log('You entered: ', $(this).val());
        //Get the Employee Data
        var searchValue = $(this).val()
        itemsRef.where("name", "==", searchValue)
        .onSnapshot(function(querySnapshot) {
            LoadTableData(querySnapshot)
        });
      });



      function LoadData(){
        itemsRef.orderBy('category')
            .limit(5).get().then(function(querySnapshot) {
            console.log('loading limit data');
            LoadTableData(querySnapshot)
        });
      }

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

      LoadData();
});