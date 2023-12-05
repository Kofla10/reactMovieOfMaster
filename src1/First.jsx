const Person = ({name, lastName, age}) => {
  return (
    <>
      <h1>Name: { name }</h1>
      <h1>Last Name: { lastName } </h1>
      <h1>age: { age }</h1>
    </>
  )
}

function First() {
  const name          = 't';
  const isNameShowing = true;
  const data = {
    name    : 'Camilo',
    lastName: 'Penaranda',
    age     : 29
  }
  const dataOne = {
    name    : 'Zuleima',
    lastName: 'Mosquera',
    age     : 53
  }
  const dataTwo = {
    name    : 'Jose',
    lastName: 'Mosquera',
    age     : 23
  }
  const dataThree = {
    name    : 'Cristopher',
    lastName: 'NN',
    age     : 4
  }

  console.log('The data is: ',data)

  return (
    <>
      <div className='First'>
        <h1>Hello, { isNameShowing ? name: 'Someone' }!</h1>
        {
          name ? (
            <>
              <p>Test</p>
            </>
          ):(
            <>
              <h1>Test</h1>
              <h2>There is no name</h2>
            </>
          )
        }

        {/* created component of person and show component here */}
        <Person { ...data }/>
        <Person { ...dataOne }/>
        <Person { ...dataTwo }/>
        <Person { ...dataThree }/>
      </div>
    </>
  )
}

export default First
