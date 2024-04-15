type a = {
    name: string;
    age: number;
    address: object;
  };
  let obj2:a={
      name: "Tuan",
      age: 19,
      address: {
          city: "Ha Noi",
      }
  }
  if(typeof obj2.name==="string"&&typeof obj2.age==="number"&&typeof obj2.address==="object"){
      console.log(true);
  } else{
      console.log(false);
  }

