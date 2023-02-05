# Modal

React-Modal es una de las librerías mas populares para modal. 

[Vistitar React Modal](https://www.npmjs.com/package/react-modal)

```npm i react-modal```

Para utilizar:

```jsx

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function MiComponente() {
    return <> 
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>
    </>
}
```

Desde el respectivo componente donde se desea empezar a abrir el modal:

```jsx
<button
    type="button"    
    onClick={() => { 
        handleClickModal();
    }}
>
    Mostrar
</button>
```