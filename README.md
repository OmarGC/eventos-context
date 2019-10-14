# Context ecample proyect
Este es el primer ejenplo para entender context API que propio de React.js

### Context:
Disponible desde la version 16.3+
Puedes pasar el state o funciones desde el componente principal hasta los hijos, sin necesidad de pasarlo por cada componente.

** En React spñp ásas los datos del componente principal al hijo.
Tambien se puede actulizar el state desde el hijo (ó ejecutar una función que lo actualize).

¿Los props son obselos?
Aún se pueden utilizar los props, asi es como react fue diseñado. Si elproyecto es sencillo, es mejor opcion props

Context hacehace un pcoo mas complicado la re-utilizacion de los componentes.

Existen 2 palabras clave en context:
PROVIDER = Donde se crean los datos, state y funciones.
CONSUMER = Donde se consumen los datos o se utilizan las funciones.

CON CONTEXT PUEDES PASAR LOS DATOS DESD EL COMPONENTE PADRE AL HIJO DIRECTAMENTE.