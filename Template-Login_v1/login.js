document.getElementById('signIn-UpButton').addEventListener('click', function() {
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');
    const loginElement = document.querySelector('.login');
    const h1SignUpElement = document.querySelector('.h1-sign-up');
    const h1SignInElement = document.querySelector('.h1-sign-in');
    const formSignIn = document.querySelector('.form-sign-in');
    const formSignUp = document.querySelector('.form-sign-up');

    function handleTransitionEnd() {
        loginElement.classList.remove('transitioning');
        signInElement.removeEventListener('transitionend', handleTransitionEnd);
        signUpElement.removeEventListener('transitionend', handleTransitionEnd);
    }

    signInElement.addEventListener('transitionend', handleTransitionEnd);
    signUpElement.addEventListener('transitionend', handleTransitionEnd);

    if (signInElement.classList.contains('move-right')) {
        signInElement.classList.remove('move-right');
        signInElement.classList.add('move-left');
        loginElement.classList.add('transitioning');
    } else {
        signInElement.classList.remove('move-left');
        signInElement.classList.add('move-right');
        loginElement.classList.add('transitioning');
    }

    if (signUpElement.classList.contains('move-left')) {
        signUpElement.classList.remove('move-left');
        signUpElement.classList.add('move-right');
        loginElement.classList.add('transitioning');
    } else {
        signUpElement.classList.remove('move-right');
        signUpElement.classList.add('move-left');
        loginElement.classList.add('transitioning');
    }

    if (formSignIn.classList.contains('none')) {
        formSignIn.classList.remove('none');
        formSignUp.classList.add('none');
    } else {
        formSignIn.classList.add('none');
        formSignUp.classList.remove('none');
    }
});
