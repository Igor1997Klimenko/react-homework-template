import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import s from './Pages.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('fill in the fields');
    const [emailError, setEmailError] = useState('fill in the fields');
    const [passwordError, setPasswordError] = useState('fill in the fields');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordlDirty, setPasswordDirty] = useState(false);
    const [formValid, setFormvalid] = useState(false);
    const [values, setValues] = useState({ showPassword: false })
    const dispatch = useDispatch();

    const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormvalid(false)
        } else {
            setFormvalid(true) 
        }
        if (!name || !email || !password) {
            setFormvalid(false)
        } else {
            setFormvalid(true) 
        }
    }, [email, emailError, name, nameError, password, passwordError])
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }; 

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            default:
                return;
        };
    };

    const handleName = e => {
        setName(e.target.value)
        if (e.target.value.length < 3) {
            setNameError('invalid name')
        } else {
            setNameError('')
        };
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('this email is incorrect')
        } else {
            setEmailError('')
        };
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 7 || e.target.value.length > 12) {
            setPasswordError('password must be longer than 7 and less than 12')
            if (!e.target.value) {
                setPasswordError('Password cannot be empty')
            };
        } else {
            setPasswordError('')
        };
    };
   
    return(
        <form className={s.FormRegister} onSubmit={handleSubmit}>
            <span className={s.RegisterText}><AppRegistrationIcon />Register</span>
            <p className={s.InputRegister}>
                <TextField
                    className={s.InputEidth}
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                    onBlur={e => handleBlur(e)}
                />
                {(nameError && nameDirty) && <div className={s.ErrorType}>{nameError}</div>}
                </p>
            
                <p className={s.InputRegister}>
                <TextField
                    className={s.InputEidth}
                    label="Email"
                    variant="outlined"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => handleEmail(e)}
                    onBlur={e => handleBlur(e)}
                />
                {(emailError && emailDirty) && <div className={s.ErrorType}>{emailError}</div>}
                </p>
            
                <p className={s.InputRegister}>
                <FormControl className={s.InputPosition} sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    className={s.InputEidth}
                    type={values.showPassword ? 'text' : 'password'}
                    value={password}
                    variant="outlined"
                    name="password"
                    onChange={handlePassword}
                    onBlur={e => handleBlur(e)}
                    endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    label="Password"
                    onClick={handleClickShowPassword}
                    edge="end"
                    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                    label="Password"
                    />
                </FormControl>
                {(passwordError && passwordlDirty) && <div className={s.ErrorType}>{passwordError}</div>}</p>
                
                <Button
                    disabled={!formValid}
                    className={s.ButtRegis}
                    type="submit"
                    variant="outlined"
                >Register</Button>

            <p className={s.TextProject}>If you have an account, then go to it <Link className={s.BackLogin} to='/login'>SignIn</Link></p>
        </form>
    )
}

export default Registration;