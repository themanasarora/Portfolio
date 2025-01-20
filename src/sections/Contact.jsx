import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange=({target:{name, value}})=>{
        setForm({...form, [name]: value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        setLoading(true)
        try {
           await emailjs.send('service_xen9r8f' ,'template_v3d9bjl', {
                from_name:form.name,
                to_name:'Manas',
                from_email:form.email,
                to_email:'adrian@jsmastery.pro',
                message:form.message,},
               '7L8fSUsWL6Ms875sW'
               )
            setLoading(false)
            alert('message sent')
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }catch (error){
            setLoading(false)
            console.log(error)
            alert('something went wrong')
        }

    }

    // service_xen9r8f

    return (
        <section className="c-space my-20">
            <h3 className="head-text">Contact Me</h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">If you want a great UI/UX design or just want to say hi, my inbox is open for all.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label"> Your Name </span>
                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                   placeholder="Your Name" required className="field-input"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Email </span>
                            <input type="email" name="email" value={form.email} onChange={handleChange}
                                   placeholder="Your email" required className="field-input"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label"> Your Message </span>
                            <textarea name="message" value={form.message} onChange={handleChange}
                                   placeholder="Hi, I am interested in ..." required={5} className="field-input"/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="up arrow" className="feild-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
