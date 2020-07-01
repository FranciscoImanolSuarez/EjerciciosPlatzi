// Instrucciones: seguro has visto que en Platzi hay más de 600 cursos ¿puedes mostrar a que categorías corresponden en una sola línea de código?
// Debe mostrarse así:
// Platzi cuenta con cursos de:
// [categoría1]
// [categoría2]
// [categoría3]
// [categoría4]
// [categoría5]
// [categoría6]


const PlatziCursos  = ['Javascript', 'Node', 'Python', 'C', 'C++', 'Ruby', 'Less']

const printCursos = (cursos) => {
    for (let i = 0; i < cursos.length; i++) {
        console.log( cursos[i]);
    }
}

printCursos(PlatziCursos)