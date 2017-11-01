/*
  numberOfOnlineAnnounce = async () => {
    var a; 
    var b;
    return b = await firebase.database().ref("/announces/").once("value") // Return serve as a promise to wait
      .then(function(snapshot) {
        a = snapshot.numChildren(); // ("number of announces")
        console.log("a   "+a);
        console.log("b   "+b)
      })
      .then (() => this.state.announceNumber = a); // Wait for data before assigning the value to "announceNumber"
      
  }*/
/*
  retrieve = async (announceNumber) => { // Stock the announce into this.state.retrieved
    var c
    return c = await firebase.database().ref("/announces/" + announceNumber).once("/Details/")
      .then(function(snapshot) {
        announce = snapshot.val().announce;
        console.log("c:  "+c)
    })
      .then (() => this.state.retrieved = announce);
  }*/

/*
  createList_old() {
    // var numberOfOnlineAnnounce = this.numberOfOnlineAnnounce()
    let var_numberOfOnlineAnnounce = 1
    let announce = this.retrieve(var_numberOfOnlineAnnounce)
    

    //HOW TO GET DATA FROM FIREBASE
    // https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach
    var ref = firebase.database().ref('announces/1/Details');
    ref.once('value')
    .then(function(snapshot) {
      var date = snapshot.child("date").val();
      var offer = snapshot.child("offer").val();
      var price = snapshot.child("price").val();

      var key = snapshot.key;
      var childKey = snapshot.child("1/Details").key;

      console.log("Date: "+date+" Offer: "+offer+" Price:"+price );

    });
  }*/
