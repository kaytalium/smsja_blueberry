export module Nav{

    //check to see if user has logged in already 
    //if so then handle app view
    let userLoggedIn = userAppStatus()
    if(userLoggedIn) handleUserView(userLoggedIn)
    else handleUserView()

    //the following explain how the this navigation script works.
    //when the app starts up it will check to see if user already logged in or not. 
    //if logged in then user will be navigated to the main function, 
    //else show login page. 

    //at the login page user will have option to create new account or sign in with existing account 
    //credentials. 

    /**
     * This function will hide and show the router element on the main page
     */
    function showMainContent(){
        document.querySelector('.bb-content').classList.add('is-shown')
    }

    showMainContent()

    function userAppStatus(){return false}

    function handleUserView(isLoggedIn: boolean = false) {
        console.log('is this user logged in? ',isLoggedIn)
    }

    
}