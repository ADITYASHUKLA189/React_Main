function customRender(reactElement, container) {
    // create element
    const domElement = document.createElement(reactElement.type);

    // add text (children)
    domElement.textContent = reactElement.Children;

    // loop through props object
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // append to container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
