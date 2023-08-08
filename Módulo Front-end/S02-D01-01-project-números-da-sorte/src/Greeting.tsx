function Greeting() {
  const firstName = 'Miguel';
  const lastName = 'Silva';
  return (
  <>
    <h1 className="greeting"> Olá, {`${firstName} ${lastName}`}
    <img src="https://i.imgur.com/rqvLd3q.png" alt="logotipo" />
    </h1>
  </>
  )
}

export default Greeting;