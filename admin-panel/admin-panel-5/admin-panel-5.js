import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxNcFgznotup7Fy9wMlyD4zhTCHMTGPU",
  authDomain: "new-project-1600c.firebaseapp.com",
  projectId: "new-project-1600c",
  storageBucket: "new-project-1600c.appspot.com",
  messagingSenderId: "902127933715",
  appId: "1:902127933715:web:cf6c0b92d0880a9a7aa2e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var user;

import {
  getDatabase,
  ref,
  get,
  child,
  set,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const db = getDatabase();

// set the values of id and subplace_id to read the data
// const subplaceId = 100;
// const Id = 500;

var username,
  userflag,
  usermessage,
  userdescription,
  adminvalue,
  sdovalue,
  engineervalue,
  supervisorvalue;
var firstObjRead = 0,
  secondObjRead = 0;

function ReadData() {
  const dbref = ref(db);

  get(child(dbref, "query/" + firstObjRead + "/queries/" + secondObjRead)).then(
    (snapshot) => {
      if (snapshot.exists()) {
        username = snapshot.val().user;
        userflag = snapshot.val().flag;
        usermessage = snapshot.val().message;
        userdescription = snapshot.val().msgDesc;
        adminvalue = snapshot.val().status.admin1;
        sdovalue = snapshot.val().status.sdo1;
        engineervalue = snapshot.val().status.engineer1;
        supervisorvalue = snapshot.val().status.supervisor1;

        console.log(
          username,
          userflag,
          usermessage,
          userdescription,
          adminvalue,
          sdovalue,
          engineervalue,
          supervisorvalue
        );
      }
    }
  );
}

// put the values here which you want to update
const firstobj = 0; //the valus will be 0 to 14 its the index of object in firebase
const secondobj = 0; //the values are from 0 to 9 its the index of the objects inside the queries array in firebase
const Name = "";
const Flag = "";
const Message = "";
const Description = "";
const Admin = "";
const Sdo = "";
const Engineer = "";
const Supervisor = "";

const changeData = () => {
  if (Name != "")
    update(ref(db, "query/" + firstobj + "/queries/" + secondobj), {
      user: Name,
    });
  if (Message != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj), {
      message: Message,
    });
  if (Description != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj), {
      msgDesc: Description,
    });
  if (Flag != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj), {
      flag: Flag,
    });

  if (Admin != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj + "/status"), {
      admin1: Admin,
    });
  if (Sdo != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj + "/status"), {
      sdo1: Sdo,
    });
  if (Engineer != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj + "/status"), {
      engineer1: Engineer,
    });
  if (Supervisor != "")
    update(ref(db, "data/" + firstobj + "/queries/" + secondobj + "/status"), {
      supervisor1: Supervisor,
    });
};

// ReadData();
// changeData();

export function ReadData()