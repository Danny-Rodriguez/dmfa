function WelcomeDialog() {
  // return (
  //   //* Whatever's in this FancyBorder goes into props down in the function FancyBorder's props.children
  //   <FancyBorder>
  //     <h1 className="Dialog-title">Welcome</h1>
  //     <p>Thank you for visiting my home</p>
  //   </FancyBorder>
  // )

  return (
    <>
      <Dialog title="Welcome to React" content="This is React" />
      <Dialog title="Welcome to JavaScript" content="This is JavaScript" />
    </>
  )
}

export default WelcomeDialog

function FancyBorder(props) {
  return <div>{props.children}</div>
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{props.title}</h1>
      <p>{props.content}</p>
    </FancyBorder>
  )
}
