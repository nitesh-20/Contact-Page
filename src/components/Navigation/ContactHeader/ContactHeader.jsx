import React from 'react'
import styles from "./ContactHeader.module.css"
const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo voluptatibus fugit rerum architecto, quae nulla eveniet harum eaque optio, esse, doloremque nesciunt ad reprehenderit quisquam ab recusandae dolores laudantium labore.</p>
    </div>
  )
}

export default ContactHeader