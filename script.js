const allRecords = [];

function submitForm() {
    const firstname = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const specialization = document.getElementById('specialization').value;
    const experience = document.getElementById('experience').value;
    const Phonenumber = document.getElementById('phone').value;
    const achievements = document.getElementById('achievements').value;

    if (!fname || !lname || !gender || !age || !specialization || !experience || !phone || !achievements) {
        alert("All Fields are required");
        return;
    }

    const record = {
        firstname: firstname,
        lastName: lastName,
        gender: gender,
        age: age,
        specialization: specialization,
        experience: experience,
        Phonenumber: Phonenumber,
        achievements: achievements
    };
    // console.log(record);
    allRecords.push(record);
    // console.log(allRecords);
    resetForm();
    updateTable();
    alert(`Details Saved! ${firstname}`)
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function updateTable() {
  const tableBody = document.getElementById('tableBody');
  console.log(tableBody);
  tableBody.innerHTML = '';

  const filterSpecialization = document.getElementById('filterSpecialization').value;
  const filterExperience = parseInt(document.getElementById('filterExperience').value);

  // console.log(filterSpecialization);
  // console.log(filterExperience);

  allRecords.forEach(record => {
      if ((filterSpecialization === 'all' || record.specialization === filterSpecialization) &&
          (!filterExperience || record.experience >= filterExperience)) {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${record.firstname}</td>
              <td>${record.lastName}</td>
              <td>${record.gender}</td>
              <td>${record.age}</td>
              <td>${record.specialization}</td>
              <td>${record.experience}</td>
              <td>${record.Phonenumber}</td>
              <td>${record.achievements}</td>
          `;
          tableBody.appendChild(row);
      }
  });
}

function filterDetails() {
    updateTable();
}

function updateRecords() {
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('choiceform').style.display = 'block';
}

function back(){
  document.getElementById('surveyForm').style.display = 'block';
  document.getElementById('choiceform').style.display = 'none';
}
