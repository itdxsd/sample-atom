    
import CryptoJS from '../../shared/utils/cryptoJs/cryptoJs'
import { reactHookUseForm } from '../../shared/hooks/appReactHookFormUtil'
// import LoginService from '../assets/javascripts/services/login/login.service'
// import { overlaySpinner, disposeSpinner } from '../assets/javascripts/utils/appSpinner'
// import { AuthContext } from '../assets/javascripts/context/authContext'

   const useLoginInput = (onAddTodo) => {
    
    // const { loginUser } = useContext(AuthContext)
    const { register, unregister, setValue, errors, 
        trigger, clearErrors, watch, handleSubmit } = reactHookUseForm()

    const errorMessage = watch('errorMessage', '')

    const clearTxtField = () => {
        setValue('username', '')
        setValue('password', '')
    }

    const resetFilters = () => {
        setValue('username', '')
        setValue('password', '')
        setValue('errorMessage', '')
        clearErrors(['username', 'password'])
    }

    const handleBlur = (e) => {
        trigger(e.target.name)
    }

    const JsonFormatter = {
        stringify: function(cipherParams) {
          // create json object with ciphertext
          var jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
     
          // optionally add iv or salt
          if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
          }
     
          if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
          }
     
          // stringify json object
          return JSON.stringify(jsonObj);
        },
        parse: function(jsonStr) {
          // parse json string
          var jsonObj = JSON.parse(jsonStr);
     
          // extract ciphertext from json object, and create cipher params object
          var cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
          });
     
          // optionally extract iv or salt
     
          if (jsonObj.iv) {
            cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv);
          }
     
          if (jsonObj.s) {
            cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s);
          }
     
          return cipherParams;
        }
    };

    const authenticateUser = (data) => {
        const cipherPassword = CryptoJS.AES.encrypt(data.password.toString(), "xerxes",
            {format: JsonFormatter}
        );
        const bytes = CryptoJS.AES.decrypt(cipherPassword, "xerxes",
            {format: JsonFormatter}
        );
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(cipherPassword)
        console.log(originalText)

        const algorithm = "aes-256-cbc"; 
        setValue('errorMessage','aes-256-cbc')
        // generate 16 bytes of random data
        // const initVector = CryptoJS.randomBytes(16);

        // // protected data
        // const message = "This is a secret message";

        // // secret key generate 32 bytes of random data
        // const Securitykey = CryptoJS.randomBytes(32);

        // // the cipher function
        // const cipher = CryptoJS.createCipheriv(algorithm, Securitykey, initVector);
        // const { username, password } = data
        // if(username && password) {
        //     const uid = overlaySpinner()
        //     LoginService()
        //         .authenticateUser(username, password)
        //         .then((response) => {
        //             if (response.status === 200 && response.data.token) {
        //                 sessionStorage.setItem('request', 'requestSession')
        //                 localStorage.setItem('request', 'requestSession')
        //                 disposeSpinner(uid)
        //                 // loginUser()
        //             } else if (response.data.message) {
        //                 setValue('errorMessage', response.data.message)
        //                 clearTxtField()
        //                 disposeSpinner(uid)
        //             }
        //         })
        //         .catch(() => {
        //             setValue('errorMessage',
        //                 'Internal Server Error. Please contact your system administrator',
        //             )
        //             clearTxtField()
        //             disposeSpinner(uid)
        //         })
        // }
    }
    return {
        register,
        errors,
        unregister,
        handleSubmit,
        errorMessage,
        resetFilters,
        handleBlur,
        authenticateUser
      };
};

export { useLoginInput };