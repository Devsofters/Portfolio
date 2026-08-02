import { useState } from "react";
import "../Styles/Contact.css";

const contactFields = [
    { key: "name", label: "name", type: "text", placeholder: "Your name" },
    { key: "email", label: "email", type: "text", placeholder: "you@example.com" },
    { key: "message", label: "message", type: "textarea", placeholder: "Say something..." },
];

const responseHeaders = [
    { label: "Email", value: "akashakii17s@gmail.com", href: "mailto:akashakii17s@gmail.com" },
    { label: "Phone", value: "+91 73392 56732", href: "tel:+917339256732" },
    { label: "LinkedIn", value: "linkedin.com/in/akashaki17s", href: "https://www.linkedin.com/in/akashaki17s" },
    { label: "Location", value: "Avinashi, Tirupur", href: null },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        setTimeout(() => {
            setStatus("success");

            const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
            const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
            window.location.href = `mailto:akashakii17s@gmail.com?subject=${subject}&body=${body}`;
        }, 900);
    };

    const payloadLines = JSON.stringify(formData, null, 2).split("\n");

    const statusText = {
        idle: "waiting for request",
        sending: "sending...",
        success: "200 OK — message ready",
        error: "400 — fill all fields",
    };

    return (
        <div className="contact">

            <p className="contactEyebrow">{"// contact"}</p>
            <h1>Contact</h1>

            <div className="contactContainer">

                <div className="headersPanel">
                    <p className="panelLabel">{"// response headers"}</p>

                    {responseHeaders.map((item) => (
                        <div className="headerRow" key={item.label}>
                            <span className="headerKey">{item.label}:</span>
                            {item.href ? (
                                <a className="headerValue" href={item.href} target="_blank" rel="noreferrer">
                                    {item.value}
                                </a>
                            ) : (
                                <span className="headerValue">{item.value}</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="requestPanel">

                    <div className="requestBar">
                        <span className="methodTag">POST</span>
                        <span className="endpointText">/contact</span>
                    </div>

                    <div className="requestBody">

                        <div className="formSide">
                            {contactFields.map((field) => (
                                <div className="formGroup" key={field.key}>
                                    <label className="formLabel">{field.label}</label>

                                    {field.type === "textarea" ? (
                                        <textarea
                                            className="formInput"
                                            placeholder={field.placeholder}
                                            value={formData[field.key]}
                                            onChange={(e) => handleChange(field.key, e.target.value)}
                                            rows={4}
                                        />
                                    ) : (
                                        <input
                                            className="formInput"
                                            type="text"
                                            placeholder={field.placeholder}
                                            value={formData[field.key]}
                                            onChange={(e) => handleChange(field.key, e.target.value)}
                                        />
                                    )}
                                </div>
                            ))}

                            <button className="sendButton" onClick={handleSubmit}>
                                Send Request →
                            </button>

                            <p className={"statusLine " + status}>{statusText[status]}</p>
                        </div>

                        <div className="previewSide">
                            <p className="panelLabel">{"// live payload"}</p>
                            <div className="jsonPreview">
                                {payloadLines.map((line, index) => (
                                    <p className="jsonLine" key={index}>{line}</p>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;