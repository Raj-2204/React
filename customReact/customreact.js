const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Click here to visi Google'
}
function acting(react, contianer){
    const creating = document.createElement(react.type);
    const text = react.text;
    creating.innerHTML = text;
    for(prop in react.props){
        creating.setAttribute(prop, react.props[prop])
    }
    contianer.appendChild(creating)
}
const mainContainer = document.getElementById('root')

acting(reactElement, mainContainer)

