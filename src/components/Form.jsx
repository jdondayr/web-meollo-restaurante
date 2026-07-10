import { useForm, ValidationError } from "@formspree/react";

const Form = () => {

    const [state, handleSubmit] = useForm("xqevrwjo")

    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3">
                <div className="work-with-us-form">
                    <div className="form-div">
                        <label htmlFor="nombre">
                            <i className="fa-solid fa-user"></i>
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                        />
                        <ValidationError
                            prefix="Nombre"
                            field="Nombre"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-div">
                        <input
                            style={{marginLeft: "2.2rem"}}
                            id="nombre"
                            type="text"
                            name="Apellidos"
                            placeholder="Apellidos"
                        />
                        <ValidationError
                            prefix="Apellidos"
                            field="Apellidos"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-div">
                        <label htmlFor="telefono">
                            <i className="fa-solid fa-phone"></i>
                        </label>
                        <input
                            id="telefono"
                            type="tel"
                            name="Telefono"
                            placeholder="Nº Móvil"
                        />
                        <ValidationError
                            prefix="Telefono"
                            field="Teléfono"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-div">
                        <label htmlFor="email">
                            <i className="fa-solid fa-at"></i>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="Email"
                            placeholder="e-mail"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-div">
                        <label htmlFor="linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </label>
                        <input
                            id="linkedin"
                            type="text"
                            name="Linkedin"
                            placeholder="Linkedin"
                        />
                        <ValidationError
                            prefix="Linkedin"
                            field="Linkedin"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-div">
                        <label htmlFor="departamento">
                            ¿Cocina o Sala?
                        </label>
                        <select name="Departamento" id="departamento">
                            <option value="">Elige una opción</option>
                            <option value="cocina">Cocina</option>
                            <option value="sala">Sala</option>
                        </select>
                        <ValidationError
                            prefix="Departamento"
                            field="Departamento"
                            errors={state.errors}
                        />
                    </div>
                    <div className="d-flex flex-column gap-2 form-textarea">
                        <label htmlFor="mensaje">Cuéntanos un poco sobre ti:</label>
                        <textarea
                            id="mensaje"
                            name="Mensaje"
                        />
                        <ValidationError
                            prefix="Mensaje"
                            field="Mensaje"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <button type="submit" disabled={state.submitting} className="btn jbtn">
                    Enviar
                </button>
            </form>
        </>
    )
}

export default Form;