import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'
import TextField from 'components/TextField'
import { required, validateEmail } from 'utils/forms'
import { SIGNUP_FORM_NAME } from 'constants'
import classes from './SignupForm.css'

const SignupForm = ({ handleSubmit, submitting }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Field
        name='username'
        type='text'
        component={TextField}
        label='Username'
        required
      />
      <Field
        name='email'
        type='text'
        component={TextField}
        label='Email'
        required
      />
      <Field
        name='password'
        component={TextField}
        label='Password'
        type='password'
        required
      />
      <div className={classes.submit}>
        <RaisedButton
          label='Signup'
          primary
          type='submit'
          disabled={submitting}
        />
      </div>
    </form>
  )
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: SIGNUP_FORM_NAME
})(SignupForm)
