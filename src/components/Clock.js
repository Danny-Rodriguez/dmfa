import React, { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState(new Date().toString())
  const [flag, setflag] = useState(true)

  // dependency array relies on the state variable
  useEffect(() => {
    console.log("component mounted or updated")
    const interval = setInterval(showDate, 1000)

    return () => {
      console.log("cleanup of Interval")
      clearInterval(interval)
    }
  }, [time])

  function showDate() {
    // console.log(new Date().toString())
    setTime(new Date().toString())
  }
  setInterval(showDate, 1000)

  return <div>{time}</div>
}

export default Clock
