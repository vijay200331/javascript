 function validateForm() {
            let id = document.getElementById("patientId").value.trim();
            let name = document.getElementById("patientName").value.trim();
            let address = document.getElementById("address").value.trim();
            let city = document.getElementById("city").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let dob = document.getElementById("dob").value;
            let error = "";

            if (!id.match(/^[A-Za-z0-9]+$/)) {
                error = "Patient ID must be alphanumeric.";
            } else if (name.length < 3) {
                error = "Patient Name must be at least 3 characters long.";
            } else if (address.length < 5) {
                error = "Address must be at least 5 characters long.";
            } else if (!city.match(/^[A-Za-z ]+$/)) {
                error = "City must contain only letters.";
            } else if (!contact.match(/^\d{10}$/)) {
                error = "Contact Number must be exactly 10 digits.";
            } else if (!dob) {
                error = "Date of Birth is required.";
            } else {
                let birthDate = new Date(dob);
                let today = new Date();
                if (birthDate >= today) {
                    error = "Date of Birth must be in the past.";
                }
            }

            document.getElementById("errorMessage").innerText = error;
            return error === "";
        }