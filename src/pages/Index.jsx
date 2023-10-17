import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='fs-1 fw-bold'>E-commerce</h1>
              <p>
                global sales tax compliance, companies around the world use
                E-commerce to simplify their payment stack.
              </p>
              <Link to='home' className='btn btn-primary btn-lg'>Get started</Link>
              <Link to='signup' className='btn btn-secondary btn-lg'>Register</Link>
            </div>
            <div className='col-md-6'>
              <img
                src='https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                className='img-fluid' alt='phone illustration'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='nosotros' className='bg-light py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2>About us</h2>
              <p>
                E-commerce we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic growth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contacto' className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2>Contact Us</h2>
              <p>If you wish to contact us, please fill out the form below:</p>
              <form action='#' method='post'>
                <div className='form-group'>
                  <label for='nombre'>Name:</label>
                  <input type='text' className='form-control' id='nombre' name='nombre' required />
                </div>
                <div className='form-group'>
                  <label for='email'>Gmail:</label>
                  <input type='email' className='form-control' id='email' name='email' required />
                </div>
                <div className='form-group'>
                  <label for='mensaje'>Messajes:</label>
                  <textarea className='form-control' id='mensaje' name='mensaje' rows='4' required />
                </div>
                <button type='submit' className='btn btn-primary'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js' />
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' />
    </div>
  )
}

export default Index
