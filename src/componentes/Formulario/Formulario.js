import { ErrorMessage, Form, Field, Formik } from "formik";



const Formulario = () => {
 

  //const [data, setData] = useState([])

  return (
    
    <Formik
      initialValues={{ nombre: '', correo: '', valor: '' }}

      validate={(values) => {
        if(values.servicio=="Corte"){
          values.valor="4000";
        }else if(values.servicio=="Barba"){
          values.valor="2000";
        }else if(values.servicio=="Facial"){
          values.valor="3000";
        }
        let errors = {}
        if (!values.nombre)
          errors.nombre = "El nombre es un campo requerido"
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre))
          errors.nombre = "El nombre sólo puede contener letras y espacios"

        if (!values.correo)
          errors.correo = "El correo es requerido"
        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo))
          errors.correo = "El correo debe ser válido"

        return errors
      }

      }

      onSubmit={(values, { resetForm }) => {    
        const addService = async (servicios) => {
          let request = await fetch("https://localhost:7024/", {
              method: "POST",
              body: JSON.stringify(servicios),
              headers: {
                  "content-type": "application/json"
              }
          })
          window.location.reload();
      }
        addService({id:0,Name: values.nombre, Correo:values.correo, Valor:values.valor,Sexo:values.sexo, Service: values.servicio, Fecha: values.date});
        resetForm();
      }}
    >
      {({ errors }) => (
        <Form className="form-control">
          <div>
            <label className="form-label" htmlFor="nombre">Nombre: </label>
            <Field className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              type="text"
            />

            <ErrorMessage name="nombre" component={() => <div className="error">{errors.nombre}</div>} />
          </div>

          <div>
            <label className="form-label" htmlFor="correo">Correo: </label>
            <Field className="form-control"
              id="correo"
              name="correo"
              placeholder="Correo"
              type="text"
            />

            <ErrorMessage name="correo" component={() => <div className="error">{errors.correo}</div>} />
          </div>

          <div>
            <label className="form-label" htmlFor="genero">
              <Field className="form-check"  type='radio' name='sexo' value='Masculino' />
              Hombre
            </label>
            
            <label className="form-label" style={{marginLeft: "5%"}} htmlFor="genero">
              <Field  className="form-check" type='radio' name='sexo' value='Femenino' />
              Mujer
            </label>
          </div>

          <div>
            <Field className="form-control"
              as="select"
              name="servicio"
              id="servicio">
              <option selected disabled>Seleccione un servicio</option>
              <option>Corte</option>
              <option>Barba</option>
              <option>Facial</option>
            </Field>
            <ErrorMessage name='servicio' component={() => <div className='error'>{errors.pais}</div>} />
          </div>
            <br/>

            <div>
           
            <Field className="form-control"
              id="date"
              name="date"
              placeholder="Fecha"
              type="date"
            />
          </div>

            <br/>
          <button className="btn btn-primary"type="submit">Enviar</button>
        </Form>
      )
      }
    </Formik>
  );
}

export default Formulario;