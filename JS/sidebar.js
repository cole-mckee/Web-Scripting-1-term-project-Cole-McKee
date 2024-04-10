// this is the function that shows my sidebar by selecting the class we want to show. the function is linked to an event listener "onClick" within my code. both functions are linked to the corresponding svg images. 
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}