import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginButton() {
    function handlelogin() {
        <GoogleLogin
            clientId="408514596826-5homr4i1lnv822jfla3ril35okhirsde.apps.googleusercontent.com"
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />;
    }
    return (
        <div>
            <button onClick={handlelogin}></button>
        </div>
    )
}