import { useFormContext, useForm } from 'react-hook-form'

const reactHookFormUseFormContext = () => {
    try {
        const {
            register,
            unregister,
            setValue,
            watch,
            getValues,
            clearErrors,
            setError,
            trigger,
            handleSubmit,
            formState: { isDirty, errors },
            forceUpdate,
            moduleVariables
        } = useFormContext()
    
        return {
            setValue,
            register,
            unregister,
            watch,
            getValues,
            clearErrors,
            errors,
            setError,
            isDirty,
            trigger,
            handleSubmit,
            forceUpdate,
            moduleVariables
        }
    } catch (e) {
        return null
    }
}

const reactHookUseForm = () => {
    try {
        const {
            register,
            unregister,
            setValue,
            watch,
            getValues,
            clearErrors,
            setError,
            trigger,
            handleSubmit,
            formState: { isDirty, errors }
        } = useForm()
    
        return {
            setValue,
            register,
            unregister,
            watch,
            getValues,
            clearErrors,
            errors,
            setError,
            isDirty,
            trigger,
            handleSubmit
        }
    } catch (e) {
        return null
    }
}

export { reactHookFormUseFormContext, reactHookUseForm }
