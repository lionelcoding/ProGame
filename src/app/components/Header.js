class Header {
    constructor(){
    
    }

    initUI(){
        const mainContainer = document.querySelector("#app")
        mainContainer.innerHTML = 
        `
        <header>
            <ul>
                <li> home </li>
                <li> all game </li>
                <li> trendy game </li>
                <li> contact </li>
            </ul>
        </header>
        `
    }

   


}






export { Header }