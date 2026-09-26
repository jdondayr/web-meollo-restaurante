import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

const Form = () => {

    const [state, handleSubmit, resetFormState] = useForm("xqevrwjo")
    const [showSuccess, setShowSuccess] = useState(false)
    const formRef = useRef(null)
    const closeButtonRef = useRef(null)
    const submitButtonRef = useRef(null)

    const closeSuccessMessage = () => {
        setShowSuccess(false)
        submitButtonRef.current?.focus()
    }

    useEffect(() => {
        if (!state.succeeded) return

        formRef.current?.reset()
        setShowSuccess(true)
        resetFormState()
    }, [state.succeeded, resetFormState])

    useEffect(() => {
        if (!showSuccess) return

        closeButtonRef.current?.focus()

        const closeWithEscape = (event) => {
            if (event.key === "Escape") closeSuccessMessage()
        }

        document.addEventListener("keydown", closeWithEscape)
        return () => document.removeEventListener("keydown", closeWithEscape)
    }, [showSuccess])

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} className="application-form animate__animated animate__fadeIn">
                <div className="application-fields">
                    <div className="application-control-group">
                        <div className="application-field">
                            <label className="application-field-icon" htmlFor="nombre" aria-label="Nombre">
                                <i className="fa-regular fa-user" aria-hidden="true"></i>
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                name="Nombre"
                                placeholder="Nombre"
                                autoComplete="given-name"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Nombre"
                            field="Nombre"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field">
                            <label className="application-field-icon" htmlFor="apellidos" aria-label="Apellidos">
                                <i className="fa-regular fa-id-card" aria-hidden="true"></i>
                            </label>
                            <input
                                id="apellidos"
                                type="text"
                                name="Apellidos"
                                placeholder="Apellidos"
                                autoComplete="family-name"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Apellidos"
                            field="Apellidos"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field">
                            <label className="application-field-icon" htmlFor="telefono" aria-label="Número de móvil">
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                            </label>
                            <input
                                id="telefono"
                                type="tel"
                                name="Telefono"
                                placeholder="Nº Móvil"
                                autoComplete="tel"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Teléfono"
                            field="Telefono"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field">
                            <label className="application-field-icon" htmlFor="email" aria-label="Correo electrónico">
                                <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="Email"
                                placeholder="e-mail"
                                autoComplete="email"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Email"
                            field="Email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field">
                            <label className="application-field-icon" htmlFor="linkedin" aria-label="Perfil de LinkedIn">
                                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                            </label>
                            <input
                                id="linkedin"
                                type="text"
                                name="Linkedin"
                                placeholder="LinkedIn"
                                autoComplete="url"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="LinkedIn"
                            field="Linkedin"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field application-field-select">
                            <label className="application-field-icon" htmlFor="departamento" aria-label="Departamento">
                                <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                            </label>
                            <select name="Departamento" id="departamento">
                                <option value="">¿Cocina o sala?</option>
                                <option value="cocina">Cocina</option>
                                <option value="sala">Sala</option>
                            </select>
                            <i className="application-select-arrow fa-solid fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Departamento"
                            field="Departamento"
                            errors={state.errors}
                        />
                    </div>

                    <div className="application-control-group">
                        <div className="application-field application-field-textarea">
                            <label className="application-field-icon" htmlFor="mensaje" aria-label="Presentación">
                                <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>
                            </label>
                            <textarea
                                id="mensaje"
                                name="Mensaje"
                                placeholder="Cuéntanos un poco sobre ti"
                            />
                        </div>
                        <ValidationError
                            className="application-error"
                            prefix="Mensaje"
                            field="Mensaje"
                            errors={state.errors}
                        />
                    </div>
                </div>

                <button ref={submitButtonRef} type="submit" disabled={state.submitting} className="application-submit">
                    {state.submitting ? "Enviando..." : "Enviar"}
                </button>
            </form>

            {showSuccess && (
                <div
                    className="application-success-backdrop"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) closeSuccessMessage()
                    }}
                >
                    <div
                        className="application-success-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="application-success-title"
                        aria-describedby="application-success-description"
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="application-success-close"
                            onClick={closeSuccessMessage}
                            aria-label="Cerrar confirmación"
                        >
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>

                        <span className="application-success-icon" aria-hidden="true">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <h2 id="application-success-title">¡Formulario enviado!</h2>
                        <p id="application-success-description">
                            Hemos recibido tus datos correctamente. Nos pondremos en contacto contigo lo antes posible.
                        </p>
                        <button type="button" className="application-success-confirm" onClick={closeSuccessMessage}>
                            Entendido
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Form;
