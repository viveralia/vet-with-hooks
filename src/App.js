import React, { useState } from 'react'
import 'animate.css/animate.css'

/********************/
/******* FORM *******/
/********************/
const Form = ({ saveNewAppointment }) => {
  // States
  const [appointment, setAppointment] = useState({})

  // Handle Functions
  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    saveNewAppointment(appointment)
    setAppointment({})
  }

  // Component View
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted" htmlFor="petName">
          Nombre de la mascota
        </label>
        <input
          type="text"
          className="form-control"
          name="petName"
          id="petName"
          onChange={handleChange}
          required
          value={appointment.petName || ''}
        />
      </div>
      <div className="form-group">
        <label className="text-muted" htmlFor="ownerName">
          Nombre del dueño
        </label>
        <input
          type="text"
          className="form-control"
          name="ownerName"
          id="ownerName"
          onChange={handleChange}
          required
          value={appointment.ownerName || ''}
        />
      </div>
      <div className="form-group">
        <label className="text-muted" htmlFor="date">
          Fecha
        </label>
        <input
          type="date"
          className="form-control"
          name="date"
          id="date"
          onChange={handleChange}
          required
          value={appointment.date || ''}
        />
      </div>
      <div className="form-group">
        <label className="text-muted" htmlFor="time">
          Fecha
        </label>
        <input
          type="time"
          className="form-control"
          name="time"
          id="time"
          onChange={handleChange}
          required
          value={appointment.time || ''}
        />
      </div>
      <div className="form-group">
        <label className="text-muted" htmlFor="symptoms">
          Síntomas
        </label>
        <textarea
          name="symptoms"
          id="symptoms"
          cols="30"
          rows="10"
          className="form-control"
          onChange={handleChange}
          required
          value={appointment.symptoms || ''}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-dark btn-block py-2 text-uppercase"
      >
        <small style={{ letterSpacing: '1px' }}>Agendar cita</small>
      </button>
    </form>
  )
}

/********************/
/**** APPOINTMENT ***/
/********************/
const Appointment = ({
  appointment: { petName, ownerName, date, time, symptoms }
}) => {
  return (
    <div className="col-12 col-lg-6 animated fast fadeIn">
      <article className="card bg-light px-3 py-4 mb-4">
        <header className="mb-2 pb-1 border-bottom">
          <h2 className="h5 mb-1">
            {petName} <small className="text-muted">({ownerName})</small>
          </h2>
        </header>
        <section className="mb-2">
          <p className="mb-1">
            Fecha: <span className="text-muted">{date}</span>
          </p>
          <p className="mb-0">
            Hora: <span className="text-muted">{time}</span>
          </p>
          <p className="mb-0">
            Síntomas: <span className="text-muted">{symptoms}</span>
          </p>
        </section>
      </article>
    </div>
  )
}

/********************/
/******* APP ********/
/********************/
const App = () => {
  // States
  const [appointments, setAppointments] = useState([])

  const saveNewAppointment = newAppointment => {
    setAppointments([...appointments, newAppointment])
  }

  // Component View
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          <header className="col-12 text-center my-4">
            <h1 className="h6 text-uppercase" style={{ letterSpacing: '1px' }}>
              Veterinaria
            </h1>
          </header>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <Form saveNewAppointment={saveNewAppointment} />
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="row">
              {appointments.length >= 1 &&
                appointments.map((appointment, i) => (
                  <Appointment key={i} appointment={appointment} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
