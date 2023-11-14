import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="firstName" type="text" defaultValue="victor" />
        <FormRow name="lastName" labelText="Last Name" type="text" defaultValue="ike" />
        <FormRow name="location" type="text" defaultValue="earth" />
        <FormRow name="email" type="email" defaultValue="victor@test.io" />
        <FormRow name="password" type="password" defaultValue="test1234" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
