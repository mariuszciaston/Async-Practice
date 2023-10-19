  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();

//------------------------------------------------------

const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };
  
async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  }

  //------------------------------------------------------
  const yourAsyncFunction = async () => {
    // do something asynchronously and return a promise
    return result;
  }
  
  //------------------------------------------------------
  anArray.forEach(async item => {
    // do something asynchronously for each item in 'anArray'
    // one could also use .map here to return an array of promises to use with 'Promise.all()'
  });

  //------------------------------------------------------
  server.getPeople().then(async people => {
    people.forEach(person => {
      // do something asynchronously for each person
    });
  });

