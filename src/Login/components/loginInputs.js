import { useLoginInput } from "./useLoginInput";
import LLogo from '../../assets/images/txtcen.png'
import React, { useEffect } from 'react';

const LoginInput = ({ onAddTodo }) => {
  const {
    register,
    unregister,
    errors,
    handleSubmit,
    errorMessage,
    resetFilters,
    handleBlur,
    authenticateUser,
  } = useLoginInput(onAddTodo);

    const useMountEffect = (func) => {
        useEffect(func, [])
    }

    useMountEffect(() => {
        register('errorMessage')
        return () => {
            unregister('errorMessage')
        }
    })

  return (
    <>
    <div className="login-forms">
        <form onSubmit={handleSubmit(authenticateUser)}>
            <div className="img-center">
                <img className="img-center" alt="lLogo" src={LLogo} />
            </div>
                <div className="flex-row">
                    <div className="flex-7">
                        <label htmlFor="Username" className="login-forms-label">User Name</label>
                    </div>
                    <div className="flex-15">
                        <input
                            className={errors.username ? 'form-error-control' : 'form-control'}
                            onBlur={handleBlur}
                            id="Username"
                            type="text"
                            name="username"
                            {...register("username", { required: true })}
                            maxLength={20}
                        />
                        {(errors.username) &&
                            <span className="form-error-icon fa fa-exclamation-circle">
                                <div className="tooltip-content">
                                    <span>{'Username field is required'}</span>
                                </div>
                            </span>
                        }
                        {(errors.username) &&
                            <span className="form-error-message">{'Username field is required'}</span>
                        }
                    </div>
                </div>
                <div className="flex-row mt-2">
                    <div className="flex-7">
                        <label htmlFor="Password" className="login-forms-label">Password</label>
                    </div>
                    <div className="flex-15">
                        <input
                            className={errors.password ? 'form-error-control' : 'form-control'}
                            //  ref={register({ required: {value: true, message: 'Password field is required'} })}
                            id="Password"
                            onBlur={handleBlur}
                            name="password"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        {(errors.password) &&
                            <span className="form-error-icon fa fa-exclamation-circle">
                                <div className="tooltip-content">
                                    <span>{'Password field is required'}</span>
                                </div>
                            </span>
                        }
                        {(errors.password) &&
                            <span className="form-error-message">{'Password field is required'}</span>
                        }
                    </div>
                </div>
                <div className="flex-row mt-5">
                    <div className="offset-5 flex-6">
                        <input
                            type="button"
                            onClick={resetFilters}
                            value="Reset"
                            className="btn btn-primary"
                        />
                    </div>
                    <div className="offset-1 flex-6">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-primary"
                        />
                    </div>
                </div>
        </form> 
    </div>
    {errorMessage && (
                <div className="login-error-message">
                        <span className="error-wrap">{errorMessage}</span>
                </div>
    )}
    </>
  );
};

export { LoginInput };
