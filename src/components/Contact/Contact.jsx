import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>Get in touch</h1>
        <p>andrew.debenham94@gmail.com</p>
        <p>+61 410 076 145</p>
        {/* <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <button className='hover btn'>Submit</button>
        </form> */}
    </section>
  )
}

export default Contact