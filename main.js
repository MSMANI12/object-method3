const users=[
{
  first_name:'Mike',
  location:'London'
  },
  {
  first_name:'Tim',
  location:'Us'
  },
  {
  first_name:'john',
  location:'Australia'
  }
  ];
  

  result=users.map(function(person){
	
  return (`${person.first_name} lives in ${person.location}`);
    });
	console.log(result);