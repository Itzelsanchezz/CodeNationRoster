import "./styles.css";

function createrosterItem(
  firstName,
  lastName,
  personPronouns,
  studentHS,
  favoriteColor,
  classYear
) {
  let rosterItem = (
    <div className="row">
      <div className="fName">{firstName}</div>

      <div className="lName">{lastName}</div>

      <div className="pronouns">{personPronouns}</div>

      <div className="school">{studentHS}</div>

      <div className="color">{favoriteColor}</div>

      <div className="class">{classYear}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let rosterList = [
    {
      firstName: "Mikkail",
      lastName: "Allen",
      personPronouns: "he/his",
      studentHS: "Williamsburg",
      favoriteColor: "blue",
      classYear: "2022"
    },
    {
      firstName: "Justin",
      lastName: "Apupalo",
      personPronouns: "he/his",
      studentHS: "NYIT",
      favoriteColor: "Blue",
      classYear: "2025"
    },
    {
      firstName: "Christopher",
      lastName: "Bonifacio",
      personPronouns: "he/his",
      studentHS: "OCA",
      favoriteColor: "Blue",
      classYear: "2022"
    },
    {
      firstName: "Angel",
      lastName: "Campoverde",
      personPronouns: "he/his",
      studentHS: "Cristo Rey High school",
      favoriteColor: "Purple",
      classYear: "2022"
    }
  ];

  // let myData = myList.map(function(singleItem) {
  // createrosteritem(singleItem.field, singleItem.otherField)
  // });

  let myData = myList.map(function (rosterList) {
    createrosteritem(singleItem.field, singleItem.otherField);
  });
  let dataRows = rosterList.map(createrosterItem);
  console.log(dataRows);

  return (
    <div className="App">
      <div>{dataRows}</div>
    </div>
  );
}
